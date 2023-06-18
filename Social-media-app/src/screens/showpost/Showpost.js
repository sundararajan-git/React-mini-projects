import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Showpost.css";

const Showpost = ({ showPost, deleteHandle, editHandle, curuser }) => {
  // const [editPath, setEditpath] = useState(null);
  const location = useNavigate();
  const edit = (id) => {
    editHandle(id);
    location("/posts");
  };
  const del = (id) => {
    deleteHandle(id);
    location("/");
  };
  return (
    <>
      {showPost && (
        <div className="showpost">
          <h2>{showPost.title}</h2>
          <br />
          <p>{showPost.body}</p>
          <br />
          <button onClick={() => edit(showPost.id)}>Edit</button>
          <button onClick={() => del(showPost.id)}>Delete</button>
          <br />
          <label> by {curuser.username}</label>
        </div>
      )}
    </>
  );
};

export default Showpost;
