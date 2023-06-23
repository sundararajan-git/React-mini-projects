import React, { useEffect } from "react";
import Post from "../posts/Post";
import "./Home.css";
import useApiFetch from "../../hook/useapifetch";

const Home = () => {
  const APIURL = "http://localhost:3500/post";

  const { Data, Err, isloading, optionData } = useApiFetch(APIURL, "GET");

  return (
    <>
      {Err && <p className="p">{Err}...</p>}
      {Data &&
        [...Data].reverse().map((item) => {
          return item && <Post item={item} key={item.id} />;
        })}
      {isloading && <p className="p">Loading...</p>}
    </>
  );
};

export default Home;
