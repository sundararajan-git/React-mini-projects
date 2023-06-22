import React from "react";
import Navbar from "./componets/navbar/Navbar";
import Home from "./pages/home/Home.js";
import Createpost from "./pages/createpost/Createpost";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import Showpost from "./pages/showpost/Showpost";
import Editpost from "./pages/edit/Editpost";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Createpost />} />
        <Route path="/post/:id" element={<Showpost />} />
        <Route path="/edit/:id" element={<Editpost />} />
      </Routes>
    </div>
  );
};

export default App;
