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
  const [getitem, setGetitem] = useState(null);
  const [update, setUpdate] = useState(false);
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
  const editHandle = (id) => {
    const getdata = pass.find((item) => item.id === id);
    setGetitem(getdata);
    setUpdate(true);
  };
  const updateHandle = async (input) => {
    const update = pass.map((item) => {
      return item.id === getitem.id
        ? { ...item, username: input.username, userage: input.userage }
        : item;
    });
    setpass(update);
    const add = update.filter((item) => item.id === getitem.id);
    const patchOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: await JSON.stringify({
        username: add[0].username,
        userage: add[0].userage,
      }),
    };
    const path = `${ADD_URL}/${getitem.id}`;
    const result = await api(path, patchOption);
    if (result) setFetchError(result);
  };
  return (
    <div className="container">
      <Form
        getdata={getdata}
        getitem={getitem}
        update={update}
        setUpdate={setUpdate}
        updateHandle={updateHandle}
      />
      {isLoading && <p>Loading....</p>}
      {fetchError && <p>{`Error is ${fetchError}`}</p>}
      {!isLoading && !fetchError ? (
        <Table
          pass={pass}
          deleteHandle={deleteHandle}
          editHandle={editHandle}
        />
      ) : null}
    </div>
  );
}
