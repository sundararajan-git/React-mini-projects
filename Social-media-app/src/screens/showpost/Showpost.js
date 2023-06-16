import React from "react";

const Showpost = ({ showPost }) => {
  console.log(showPost);
  return (
    <>
      {showPost && (
        <div>
          <h2>{showPost.title}</h2>
          <p>{showPost.body}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </>
  );
};

export default Showpost;
