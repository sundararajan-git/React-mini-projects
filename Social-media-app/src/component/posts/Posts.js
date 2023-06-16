import React from "react";
import { Link } from "react-router-dom";

const Post = ({ id, title, body, postid }) => {
  const date = new Date();
  return (
    <div key={id}>
      <h2>
        <Link to={`/post/${id}`} onClick={() => postid(id)}>
          {title}
        </Link>
      </h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
