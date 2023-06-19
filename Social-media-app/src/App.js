import React, { useEffect, useState } from "react";
import Header from "./component/header/Header";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./screens/home/Home";
import Post from "./screens/createpost/CreatePost";
import Showpost from "./screens/showpost/Showpost";
import "./App.css";
import RegisterForm from "./screens/registerform/RegisterForm";
import LoginForm from "./screens/loginform/LoginForm";
import Profile from "./screens/about/Profile";

const App = () => {
  const [passpost, setpassPost] = useState([]);
  const [showPost, setShowpost] = useState();
  const [passEdit, setpassEdit] = useState(null);
  const [id, setId] = useState(0);
  const [userDetail, setUserDetail] = useState([]);
  const [curuser, setcruser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("post"));
    if (list) {
      setpassPost(list);
    }
    const user = JSON.parse(localStorage.getItem("users"));
    if (user) {
      setUserDetail(user);
    }
  }, []);
  const postHandle = (title, body, user) => {
    setId(id + 1);
    if (passEdit) {
      const update = passpost.map((item) => {
        return item.id === passEdit.id
          ? { ...item, title: title, body: body, username: user }
          : item;
      });
      setpassPost(update);
      localStorage.setItem("post", JSON.stringify(update));
    } else {
      const out = [
        ...passpost,
        { id: id, title: title, body: body, username: user },
      ];
      setpassPost(out);
      localStorage.setItem("post", JSON.stringify(out));
    }
  };
  const postid = (id) => {
    const out = passpost.find((item) => item.id === id);
    setShowpost(out);
  };
  const deleteHandle = (id) => {
    const filtered = passpost.filter((item) => item.id !== id);
    setpassPost(filtered);
    localStorage.setItem("post", JSON.stringify(filtered));
  };
  const editHandle = (id) => {
    const edit = passpost.find((item) => {
      return item.id === id && item;
    });
    setpassEdit(edit);
    localStorage.setItem("post", JSON.stringify(edit));
  };
  const registerDetail = (form) => {
    if (
      form.username &&
      form.email &&
      form.password &&
      form.password === form.confirmPassword
    ) {
      setcruser(form);
      const out = [...userDetail, form];
      setUserDetail(out);
      localStorage.setItem("users", JSON.stringify(out));
      if (form) {
        navigate("/home");
      }
    }
    console.log(form);
  };
  const logout = (username) => {
    if (username) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };
  const currentuser = (user) => {
    if (user) {
      setcruser(user);
      navigate("/home");
    }
  };
  return (
    <>
      <div className="container">
        {location.pathname === "/login" || location.pathname === "/" ? null : (
          <Header />
        )}
        {location.pathname === "/login" || location.pathname === "/" ? (
          <Routes>
            <Route
              path="/"
              element={<RegisterForm registerDetail={registerDetail} />}
            ></Route>
            <Route
              path="/login"
              element={
                <LoginForm userDetail={userDetail} currentuser={currentuser} />
              }
            ></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<p>No Result</p>} />
            <Route
              path="/home"
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
                  curuser={curuser}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile curuser={curuser} logout={logout} />}
            />
            <Route path="*" element={<p>No Result</p>} />
          </Routes>
        )}
      </div>
    </>
  );
};

export default App;
