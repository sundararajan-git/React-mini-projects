import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Showpost = ({ showPost, deleteHandle, editHandle }) => {
  const [editPath, setEditpath] = useState(null);
  const location = useNavigate();
  const edit = (id) => {
    editHandle(id);
    setEditpath(true);
  };
  useEffect(() => {
    if (editPath) {
      location("/posts");
    }
  }, [editPath]);
  const del = (id) => {
    deleteHandle(id);
    location("/");
  };
  return (
    <>
      {showPost && (
        <div>
          <h2>{showPost.title}</h2>
          <p>{showPost.body}</p>
          <button onClick={() => edit(showPost.id)}>Edit</button>
          <button onClick={() => del(showPost.id)}>Delete</button>
        </div>
      )}
    </>
  );
};

export default Showpost;
