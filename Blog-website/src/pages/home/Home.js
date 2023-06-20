import React from "react";
import Post from "../posts/Post";
import "./Home.css";
import useApiFetch from "../../hook/useapifetch";

const Home = () => {
  const APIURL = "https://jsonplaceholder.typicode.com/posts";

  const { apidata, fetchErr, isloading } = useApiFetch(APIURL);
  return (
    <>
      {fetchErr && <p className="p">{fetchErr}...</p>}
      {apidata &&
        apidata.map((item) => {
          return item && <Post item={item} key={item.id} />;
        })}
      {isloading && <p className="p">Loading...</p>}
    </>
  );
};

export default Home;
