import React from "react";
import "./Post.css";
import { useNavigate } from "react-router-dom";

const Post = ({ item }) => {
  const navigate = useNavigate();
  const clikHandle = (id) => {
    navigate(`/post/${id}`, { state: item });
  };
  return (
    <>
      {item && (
        <div className="container" onClick={() => clikHandle(item.id)}>
          <div className="card">
            <div className="card-header">{item.title}</div>
            <div className="card-body">
              <p className="card-text">{item.body}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
