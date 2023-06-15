import React from "react";
import "./Noteitem.css";

const Noteitem = ({ id, note, deleteHandle }) => {
  const date = new Date();
  return (
    <div className="item">
      <p>{note}</p>
      <span>{date.toLocaleDateString()}</span>
      <button onClick={() => deleteHandle(id)}>Delete</button>
    </div>
  );
};

export default Noteitem;
