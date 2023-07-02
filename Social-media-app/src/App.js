import React, { useState } from "react";
import Header from "./component/header/Header";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import CreatePost from "./screens/createpost/CreatePost";
import Profile from "./screens/profile/Profile";
import Showpost from "./screens/showpost/Showpost";
import Editpost from "./screens/editpost/Editpost";
import RegisterForm from "./screens/registerform/RegisterForm";
import LoginForm from "./screens/loginform/LoginForm";
import { useAuthContext } from "./hook/useAuthcontext";

const App = () => {
  const [username, setusername] = useState(null);
  const { user, isAuthReady } = useAuthContext();
  return (
    <div>
      <Header />
      {isAuthReady && (
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/post"
            element={user ? <CreatePost /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/showpost/:id"
            element={user ? <Showpost /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/editpost/:id"
            element={user ? <Editpost /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/Login"
            element={!user ? <LoginForm /> : <Navigate to={"/"} />}
          />
          <Route
            path="/register"
            element={!user ? <RegisterForm /> : <Navigate to={"/login"} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
