import React, { useEffect, useState } from "react";
import "./app.css";
import Form from "./form";
import Table from "./table";
import api from "./apiRequest";
import Edit from "./Edit";

export default function App() {
  const ADD_URL = "http://localhost:8000/items";
  const [pass, setpass] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [edit, setEdit] = useState(null);
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
    const out = pass.find((item) => {
      return item.id === id;
    });
    setEdit(out);
  };
  const updateHandle = (data) => {
    console.log(data);
    const update = pass.map((item) => {
      return item.id === data.id
        ? {
            ...pass,
            username: data.username,
            userage: data.userage,
            id: data.id,
          }
        : item;
    });
    setpass(update);
  };
  return (
    <div className="container">
      {/* {edit ? <Edit edit={edit} /> :  */}
      <Form getdata={getdata} edit={edit} updateHandle={updateHandle} />
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
