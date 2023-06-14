import React, { useState } from "react";
import "./app.css";

const App = () => {
  const key = "177f9bb9efb8cddb4aa7a3ae99d7713a";
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});
  const [err, setErr] = useState(null);
  const inputHandle = (e) => {
    setSearch(e.target.value);
  };
  const searchHandle = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`
      );
      if (!response.ok) throw Error("Data is Not Recived..");
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setResult(jsonResponse);
      setErr(null);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="Enter your Location.."
          onChange={inputHandle}
        />
        <button type="button" onClick={searchHandle}>
          Search
        </button>
        <p>day</p>
        {typeof result.main !== "undefined" ? (
          <div>
            <p>{result.name}</p>
            <p>{(result.main.temp - 273.15).toFixed(2)}C</p>
            <p>{result.weather[0].main}</p>
            <p>{result.weather[0].description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
