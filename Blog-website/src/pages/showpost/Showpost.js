import React from "react";
import { useLocation } from "react-router-dom";
import "./Showpost.css";

const Showpost = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="container">
      <h2>{state.title}</h2>
      <br />
      <p>{state.body}</p>
      <div className="btns">
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </div>
  );
};

export default Showpost;
