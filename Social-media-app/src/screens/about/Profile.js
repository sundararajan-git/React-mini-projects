import React, { useEffect, useState } from "react";

const Profile = ({ curuser, logout }) => {
  const [loginuser, setloginuser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || []
  );
  console.log(curuser);
  useEffect(() => {
    if (curuser) {
      const out = [...loginuser, curuser];
      setloginuser(out);
      localStorage.setItem("currentUser", JSON.stringify(out));
    }
  }, [curuser]);
  return (
    <div>
      <>
        <p>
          {loginuser.length > 0
            ? loginuser[loginuser.length - 1].username
            : "No user"}
        </p>
        <p>
          {loginuser.length > 0
            ? loginuser[loginuser.length - 1].email
            : "No email"}
        </p>
      </>
      <button
        onClick={() =>
          logout(
            loginuser.length > 0 && loginuser[loginuser.length - 1].username
          )
        }
      >
        {loginuser.length > 0 && [loginuser.length - 1].username
          ? "Log in"
          : "Log out"}
      </button>
    </div>
  );
};

export default Profile;
