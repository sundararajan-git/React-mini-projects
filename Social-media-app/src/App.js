import React, { useState } from "react";
import Header from "./component/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Post from "./screens/createpost/CreatePost";
import About from "./screens/about/About";
import Showpost from "./screens/showpost/Showpost";

const App = () => {
  const [passpost, setpassPost] = useState([]);
  const [showPost, setShowpost] = useState();
  const postHandle = (inputValue) => {
    setpassPost([...passpost, inputValue]);
  };
  const postid = (id) => {
    const out = passpost.find((item) => item.id === id);
    setShowpost(out);
  };
  console.log(passpost);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home passpost={passpost} postid={postid} />}
          />
          <Route path="/post/:id" element={<Showpost showPost={showPost} />} />
          <Route path="/posts" element={<Post postHandle={postHandle} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
