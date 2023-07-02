import React from "react";
import Posts from "../../component/posts/Posts";
import { useFetchCollection } from "../../hook/useFetchCollection";
import "./Home.css";

const Home = () => {
  const { documents: post, isloading } = useFetchCollection("posts");
  return (
    <div>
      {isloading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {/* {Err && <p>{Err}</p>} */}
      {post.map((item) => {
        return <Posts item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Home;
