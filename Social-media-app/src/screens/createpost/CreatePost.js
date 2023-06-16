import React, { useState } from "react";

const Post = ({ postHandle }) => {
  const [inputValue, setInputValue] = useState({ id: 0, title: "", body: "" });
  const passPost = () => {
    setInputValue({ ...inputValue, id: inputValue.id++ });
    postHandle(inputValue);
    setInputValue({ ...inputValue, title: "", body: "" });
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          id="title"
          type="text"
          placeholder="Title here.."
          value={inputValue.title}
          onChange={(e) =>
            setInputValue({ ...inputValue, title: e.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <textarea
          typeof="comment"
          placeholder="Body here..."
          value={inputValue.body}
          onChange={(e) =>
            setInputValue({ ...inputValue, body: e.target.value })
          }
        ></textarea>
        <br />
        <button type="submit" onClick={passPost}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
