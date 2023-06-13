import React, { useEffect, useState } from "react";
import Navbar from "./componets/navbar/Navbar";
import Home from "./screens/home/Home";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPosts] = useState([]);
  const [Err, setErr] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data is Not Recived");
        const jsonResponse = await response.json();
        setPosts(jsonResponse);
        setErr(null);
      } catch (err) {
        setErr(err.Message);
      }
    };
    (async () => await fetchdata())();
  }, []);
  return (
    <div>
      <Navbar />
      {post.map((item) => {
        return <Home item={item} key={item.id} />;
      })}
    </div>
  );
};

export default App;
