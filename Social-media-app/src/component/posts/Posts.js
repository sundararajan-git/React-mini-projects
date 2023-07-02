import React from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import "./Posts.css";

const Posts = ({ item }) => {
  const navigate = useNavigate();
  const passPost = () => {
    navigate(`/showpost/${item.id}`, { state: item });
  };
  return (
    <div className="container">
      <div className="card">
        <h5 className="card-header">
          {item.title}
          <small>
            <i>
              {item.createdAt && moment(item.createdAt.toDate()).calendar()}
            </i>
          </small>
        </h5>
        <div className="card-body">
          <p className="card-text">{item.body}</p>
          <pre>by {item.username}</pre>
          <button onClick={passPost} className="btn ">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
