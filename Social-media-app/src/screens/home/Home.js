import React from "react";
import Posts from "../../component/posts/Posts";
import useApiFetch from "../../hook/UseApiFetch";
import API_URL from "../../api/api";
const Home = ({ username }) => {
  const { Data, Err, isloading, optionData } = useApiFetch(API_URL, "GET");
  return (
    <div>
      {isloading && <p>Loading...</p>}
      {Err && <p>{Err}</p>}
      {[...Data].reverse().map((item) => {
        return <Posts item={item} key={item.id} username={username} />;
      })}
    </div>
  );
};

export default Home;
