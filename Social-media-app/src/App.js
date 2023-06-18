import React, { useState } from "react";
import Header from "./component/header/Header";
import {
  BrowserRouter,
  Form,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./screens/home/Home";
import Post from "./screens/createpost/CreatePost";
import About from "./screens/about/About";
import Showpost from "./screens/showpost/Showpost";
import "./App.css";
import RegisterForm from "./screens/registerform/RegisterForm";

const App = () => {
  const [passpost, setpassPost] = useState([]);
  const [showPost, setShowpost] = useState();
  const [passEdit, setpassEdit] = useState(null);
  const [id, setId] = useState(0);
  const [userDetail, setUserDetail] = useState(null);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
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
    const edit = passpost.find((item) => {
      return item.id === id && item;
    });
    setpassEdit(edit);
  };
  const registerDetail = (form) => {
    if (
      form.username &&
      form.email &&
      form.password &&
      form.password === form.confirmPassword
    ) {
      setUserDetail(form);
      setSignup(true);
    }
  };
  const logout = (username) => {
    setSignup(false);
    console.log(username);
  };
  const loginusers = (value) => {
    setLogin(value);
  };
  return (
    <BrowserRouter>
      <div className="container">
        {login ? (
          <p>hello</p>
        ) : !signup ? (
          <RegisterForm
            registerDetail={registerDetail}
            loginusers={loginusers}
          />
        ) : (
          <>
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
                element={
                  <Post
                    postHandle={postHandle}
                    passEdit={passEdit}
                    setpassEdit={setpassEdit}
                  />
                }
              />
              <Route
                path="/about"
                element={<About userDetail={userDetail} logout={logout} />}
              />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
