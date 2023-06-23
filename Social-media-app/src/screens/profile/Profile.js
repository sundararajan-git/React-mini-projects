import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="container profile">
      <div>
        <p>User Name</p>
        <p>Email id</p>
        <p>
          You have account ? <Link>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Profile;
