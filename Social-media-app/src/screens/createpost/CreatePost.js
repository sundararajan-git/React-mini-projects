import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ postHandle, passEdit }) => {
  const location = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const passPost = (e) => {
    e.preventDefault();
    postHandle(title, body);
    // eslint-disable-next-line
    location("/");
  };
  useEffect(() => {
    if (passEdit) {
      setTitle(passEdit.title);
      setBody(passEdit.body);
    }
  }, [passEdit]);

  return (
    <div>
      <form onSubmit={passPost}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          id="title"
          type="text"
          placeholder="Title here.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <textarea
          typeof="comment"
          placeholder="Body here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">{passEdit ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default Post;
