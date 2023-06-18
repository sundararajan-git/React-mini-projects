import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li className=" li active">Home</li>
          </Link>
          <Link to="/posts">
            <li className="li">Post</li>
          </Link>
          <Link to="/about">
            <li className="li">About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
