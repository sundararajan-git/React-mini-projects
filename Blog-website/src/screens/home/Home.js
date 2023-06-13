import React from "react";

const Home = ({ item }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">{item.title}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{item.body}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;
