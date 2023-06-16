import React from "react";
import Posts from "../../component/posts/Posts";

const Home = ({ passpost, postid }) => {
  return (
    <div>
      {passpost &&
        passpost.map((item) => {
          return (
            <Posts
              id={item.id}
              title={item.title}
              body={item.body}
              key={item.id}
              postid={postid}
            />
          );
        })}
    </div>
  );
};

export default Home;
