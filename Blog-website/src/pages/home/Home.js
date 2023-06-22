import React, { useEffect } from "react";
import Post from "../posts/Post";
import "./Home.css";
import useApiFetch from "../../hook/useapifetch";

const Home = () => {
  const APIURL = "http://localhost:3500/post";

  const { apidata, fetchErr, isloading } = useApiFetch(APIURL, "GET");

  return (
    <>
      {fetchErr && <p className="p">{fetchErr}...</p>}
      {apidata &&
        [...apidata].reverse().map((item) => {
          return item && <Post item={item} key={item.id} />;
        })}
      {isloading && <p className="p">Loading...</p>}
    </>
  );
};

export default Home;
