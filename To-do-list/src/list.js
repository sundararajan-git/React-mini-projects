import React, { useEffect, useState } from "react";
import Item from "./item";
import apiRequest from "./apiRequest";

const List = () => {
  const API_URL = " http://localhost:3600/item";
  const [list, setList] = useState([]);
  const [item, setItem] = useState({ id: 0, item: "", checked: false });
  const [fetchErr, setFetchErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data Is Not Recived");
        const jsonResponse = await response.json();
        setList(jsonResponse);
        setFetchErr(null);
      } catch (err) {
        setFetchErr(err);
      } finally {
      }
    };
    (async () => await fetchData())();
  }, []);
  const addItemHandle = (e) => {
    setItem({ ...item, item: e.target.value });
  };
  const addListHandle = async () => {
    setItem({ ...item, id: item.id + 1 });
    console.log(item);
    setList([...list, item]);
    setItem({ ...item, item: "" });
    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: await JSON.stringify(item),
    };
    const result = await apiRequest(API_URL, postOption);
    setFetchErr(result);
  };
  const deleteHandle = async (id) => {
    const filterd = list.filter((item) => {
      return id !== item.id;
    });
    setList(filterd);
    const deleteOption = {
      method: "DELETE",
    };
    const path = `${API_URL}/${id}`;
    const result = await apiRequest(path, deleteOption);
    setFetchErr(result);
  };
  const checkhandle = async (id) => {
    const check = list.map((item) => {
      return id === item.id ? { ...item, checked: !item.checked } : item;
    });
    setList(check);
    const add = check.filter((item) => item.id === id);
    const patchOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: await JSON.stringify({ checked: add[0].checked }),
    };
    const path = `${API_URL}/${id}`;
    const result = await apiRequest(path, patchOption);
    setFetchErr(result);
  };
  return (
    <div className="list">
      <div className="headers">
        <input
          type="text"
          name="add-item"
          value={item.item}
          placeholder=" Add item..."
          onChange={addItemHandle}
        />
        <button onClick={addListHandle}>ADD</button>
      </div>
      <div>
        <Item
          list={list}
          deleteHandle={deleteHandle}
          checkhandle={checkhandle}
        />
      </div>
    </div>
  );
};

export default List;
