import React, { useEffect, useState } from "react";
import "./app.css";
import Form from "./form";
import Table from "./table";
import api from "./apiRequest";

export default function App() {
  const ADD_URL = "http://localhost:8000/items";
  const [pass, setpass] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetechItems = async () => {
      try {
        const response = await fetch(ADD_URL);
        if (!response.ok) throw Error("Data is Not Recived");
        const json_response = await response.json();
        setpass(json_response);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetechItems())();
    }, 2000);
  }, []);

  const getdata = async (arr) => {
    const data = [...pass, arr];
    setpass(data);
    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arr),
    };
    const result = await api(ADD_URL, postOption);
    if (result) setFetchError(result);
  };
  const deleteHandle = async (id) => {
    let filterd = pass.filter((item, i) => item.id !== id);
    setpass(filterd);
    const deleteOption = {
      method: "DELETE",
    };
    const reqUrl = `${ADD_URL}/${id}`;
    const result = await api(reqUrl, deleteOption);
    if (result) setFetchError(result);
  };
  return (
    <div className="container">
      <Form getdata={getdata} />
      {isLoading && <p>Loading....</p>}
      {fetchError && <p>{`Error is ${fetchError}`}</p>}
      {!isLoading && !fetchError ? (
        <Table pass={pass} deleteHandle={deleteHandle} />
      ) : null}
    </div>
  );
}
