import React from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu-bar">
      <header className="header">
        <nav>
          <h1>POST</h1>
          <ul>
            <Link to="/">
              <li className=" li active">Home</li>
            </Link>
            <Link to="/post">
              <li className="li">Post</li>
            </Link>
            <Link to="/profile">
              <li className="li">Profile</li>
            </Link>
            <Outlet />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
