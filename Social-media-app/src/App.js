import React, { useState } from "react";
import Header from "./component/header/Header";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./screens/home/Home";
import Post from "./screens/createpost/CreatePost";
import About from "./screens/about/About";
import Showpost from "./screens/showpost/Showpost";
import "./App.css";

const App = () => {
  const [passpost, setpassPost] = useState([]);
  const [showPost, setShowpost] = useState();
  const [passEdit, setpassEdit] = useState(null);
  const [id, setId] = useState(0);
  const postHandle = (title, body) => {
    setId(id + 1);
    if (passEdit) {
      const update = passpost.map((item) => {
        return item.id === passEdit.id
          ? { ...item, title: title, body: body }
          : item;
      });
      setpassPost(update);
    } else {
      setpassPost([...passpost, { id: id, title: title, body: body }]);
    }
  };
  const postid = (id) => {
    const out = passpost.find((item) => item.id === id);
    setShowpost(out);
  };
  const deleteHandle = (id) => {
    const filtered = passpost.filter((item) => item.id !== id);
    setpassPost(filtered);
  };
  const editHandle = (id) => {
    const edit = passpost.map((item) => {
      return item.id === id && item;
    });
    setpassEdit(edit[0]);
  };
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home passpost={passpost} postid={postid} />}
          />
          <Route
            path="/post/:id"
            element={
              <Showpost
                showPost={showPost}
                deleteHandle={deleteHandle}
                editHandle={editHandle}
              />
            }
          />
          <Route
            path="/posts"
            element={<Post postHandle={postHandle} passEdit={passEdit} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
