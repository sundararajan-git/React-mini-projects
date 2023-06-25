import React, { useEffect, useState } from "react";
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
import useApiFetch from "./hook/UseApiFetch";

const App = () => {
  const [username, setusername] = useState(null);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<CreatePost username={username} />} />
        <Route
          path="/profile"
          element={<Profile username={username} setusername={setusername} />}
        />
        <Route path="/showpost/:id" element={<Showpost />} />
        <Route path="/editpost/:id" element={<Editpost />} />
        <Route
          path="/Login"
          element={<LoginForm setusername={setusername} />}
        />
        <Route path="/registerform" element={<RegisterForm />} />
      </Routes>
    </div>
  );
};

export default App;
