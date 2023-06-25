import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Posts.css";

const Posts = ({ item }) => {
  const navigate = useNavigate();
  const passPost = () => {
    navigate(`/showpost/${item.id}`, { state: item });
  };
  return (
    <div className="container">
      <div className="card">
        <h5 className="card-header">{item.title}</h5>
        <div className="card-body">
          <p className="card-text">{item.body}</p>
          <pre>by {item.username ? item.username : "unknown"}</pre>
          <button onClick={passPost} className="btn ">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
