import React from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import { useThemeContext } from "../../hook/useThemeContext";
import ThemeSwitch from "../themswitch/ThemeSwitch";

const Header = () => {
  const { theme } = useThemeContext();
  return (
    <div className="menu-bar">
      <header className="header">
        <nav className={`${theme}header`}>
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
            <Link className="theme">
              <li>
                <ThemeSwitch />
              </li>
            </Link>
            <Outlet />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
