import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu-bar">
      <header>
        <h1>
          <Link to="/">BLOG</Link>
        </h1>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
