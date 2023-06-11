import React, { useState } from "react";
import "./app.css";
import Form from "./form";
import Table from "./table";

export default function App() {
  const [pass, setpass] = useState(
    JSON.parse(localStorage.getItem("curd-operation") || [])
  );
  const getdata = (arr) => {
    const data = [...pass, arr];
    setpass(data);
    localStorage.setItem("curd-operation", JSON.stringify(data));
  };
  const deleteHandle = (index) => {
    let filterd = pass.filter((item, i) => i !== index);
    setpass(filterd);
    localStorage.setItem("curd-operation", JSON.stringify(filterd));
  };
  return (
    <div className="container">
      <Form getdata={getdata} />
      <Table pass={pass} deleteHandle={deleteHandle} />
    </div>
  );
}
