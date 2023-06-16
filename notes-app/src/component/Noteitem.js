import React from "react";
import "./Noteitem.css";

const Noteitem = ({ id, note, deleteHandle }) => {
  const date = new Date();
  return (
    <div className="item">
      <p>{note}</p>
      <div>
        <span>{date.toLocaleDateString()}</span>
        <button onClick={() => deleteHandle(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Noteitem;
