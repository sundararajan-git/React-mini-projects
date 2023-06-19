import React from "react";
import { useNavigate } from "react-router-dom";
import "./Showpost.css";

const Showpost = ({ showPost, deleteHandle, editHandle }) => {
  const location = useNavigate();
  const edit = (id) => {
    editHandle(id);
    location("/posts");
  };
  const del = (id) => {
    deleteHandle(id);
    location("/home");
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
          <label> by {showPost.username}</label>
        </div>
      )}
    </>
  );
};

export default Showpost;
