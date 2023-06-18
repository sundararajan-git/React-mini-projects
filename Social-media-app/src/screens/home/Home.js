import React from "react";
import Posts from "../../component/posts/Posts";
import "./Home.css";

const Home = ({ passpost, postid, curuser }) => {
  return (
    <div className="list">
      {passpost &&
        [...passpost].reverse().map((item) => {
          return (
            <Posts
              id={item.id}
              title={item.title}
              body={item.body}
              postid={postid}
              key={item.id}
              curuser={curuser}
            />
          );
        })}
    </div>
  );
};

export default Home;
