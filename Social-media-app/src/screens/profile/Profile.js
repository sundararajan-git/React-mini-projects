import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [db, setDb] = useState([
    "https://i.pinimg.com/originals/66/03/58/660358db389c0e793bd234d928b909c4.jpg",
    "https://imagesvibe.com/wp-content/uploads/2022/12/Cartoon-Images-For-Boys30-1.jpg",
    "https://play-lh.googleusercontent.com/O-XCKa3OyhdbPCSvk-pXLtnTjQkqggv83do7FkMak2KYa7udsBx4RV-YRQsUof_s9Evm",
  ]);
  const [num, setnum] = useState(null);
  useEffect(() => {
    setnum(Math.floor(Math.random() * db.length));
  }, []);
  return (
    <div className="profile">
      <div>
        <img src={db[num]} title="db" />
        <p></p>
        <p>Arun</p>
        <button className="btn">Log out</button>
      </div>
      <footer>
        You have account ? <Link>Register</Link>
      </footer>
    </div>
  );
};

export default Profile;
