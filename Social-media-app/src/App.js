import React from "react";
import Header from "./component/header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import CreatePost from "./screens/createpost/CreatePost";
import Profile from "./screens/profile/Profile";
import Showpost from "./screens/showpost/Showpost";
import Editpost from "./screens/editpost/Editpost";
import RegisterForm from "./screens/registerform/RegisterForm";
import LoginForm from "./screens/loginform/LoginForm";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/showpost/:id" element={<Showpost />} />
        <Route path="/editpost/:id" element={<Editpost />} />
      </Routes>
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
    </div>
  );
};

export default App;
