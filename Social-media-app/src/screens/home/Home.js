import React from "react";
import Posts from "../../component/posts/Posts";

const Home = ({ passpost, postid }) => {
  return (
    <div>
      {passpost &&
        [...passpost].reverse().map((item) => {
          return (
            <Posts
              id={item.id}
              title={item.title}
              body={item.body}
              postid={postid}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default Home;
