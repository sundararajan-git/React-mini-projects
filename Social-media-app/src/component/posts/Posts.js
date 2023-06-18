import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Post = ({ id, title, body, postid, curuser }) => {
  const date = new Date();
  return (
    <div className="posts">
      <h2>
        <Link to={`/post/${id}`} onClick={() => postid(id)}>
          {title}
        </Link>
        <span> </span>
        <span>{date.toLocaleDateString()}</span>
      </h2>
      <p>{body}</p>
      <p>{`by ${curuser.username}`}</p>
    </div>
  );
};

export default Post;
