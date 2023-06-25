import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Profile.css";

const Profile = ({ username, setusername }) => {
  const [db, setDb] = useState([
    "https://i.pinimg.com/originals/66/03/58/660358db389c0e793bd234d928b909c4.jpg",
    "https://imagesvibe.com/wp-content/uploads/2022/12/Cartoon-Images-For-Boys30-1.jpg",
    "https://play-lh.googleusercontent.com/O-XCKa3OyhdbPCSvk-pXLtnTjQkqggv83do7FkMak2KYa7udsBx4RV-YRQsUof_s9Evm",
  ]);
  const [logOut, setlogOut] = useState(true);
  const [login, setlogin] = useState(false);
  const [num, setnum] = useState(null);
  useEffect(() => {
    setnum(Math.floor(Math.random() * db.length));
  }, []);
  const logout = () => {
    setlogOut(false);
    setusername(null);
  };
  useEffect(() => {
    setTimeout(() => {
      setlogOut(true);
    }, 1000);
  }, [logOut]);
  return (
    <div className="profile">
      <div>
        <img src={db[num]} title="db" />
        <p></p>
        <p>{username ? username : "No user"}</p>
        {username ? (
          <button className="btn" onClick={logout}>
            Log out
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Log in</button>
          </Link>
        )}
        <br />
        <br />
        {!logOut ? (
          <div className="alert alert-danger" role="alert">
            Log out succesfully
          </div>
        ) : null}
      </div>
      <footer>
        You have account ? <Link to="/registerform">Register</Link>
      </footer>
    </div>
  );
};

export default Profile;
