import React, { useState } from "react";
import "./app.css";

const App = () => {
  const key = "177f9bb9efb8cddb4aa7a3ae99d7713a";
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});
  const [name, setName] = useState("");
  const [temp, setTemp] = useState(0);
  const [main, setMain] = useState("");
  const [des, setDes] = useState("");
  const [Err, setErr] = useState(null);
  const [isloading, setLoading] = useState(null);
  const inputHandle = (e) => {
    setSearch(e.target.value);
  };
  const searchHandle = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`
      );
      const jsonResponse = await response.json();
      setResult(jsonResponse);
      setName(jsonResponse.name);
      setTemp((jsonResponse.main.temp - 273.15).toFixed(2));
      setMain(jsonResponse.weather[0].main);
      setDes(jsonResponse.weather[0].description);
    } catch (err) {
      setErr(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={
        main === "Clouds"
          ? "clouds"
          : main === "Clear"
          ? "clear"
          : main === "Haze"
          ? "haze"
          : main === "Rain"
          ? "rain"
          : main === "Snow"
          ? "snow"
          : main === "Wind"
          ? "wind"
          : null
      }
      id="container"
    >
      <div className="header">
        <input
          type="text"
          placeholder="Enter your Location.."
          onChange={inputHandle}
        />
        <button type="button" onClick={searchHandle}>
          Search
        </button>
      </div>
      <div className="content">
        {isloading ? (
          <span id="s">loading....</span>
        ) : (
          <div className="report">
            {Err !== null ? (
              <span>Data is Not Recived..</span>
            ) : (
              <div className="list">
                {typeof result.main !== "undefined" ? (
                  <div className="items">
                    <p>{name}</p>
                    <p>{temp}°C</p>
                    <p>{main}</p>
                    <p>{des}</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
