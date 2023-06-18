import React, { useEffect } from "react";

const Profile = ({ curuser, logout, logined }) => {
  useEffect(() => {
    if (curuser.username) {
      logined(true);
    }
  }, [curuser]);
  return (
    <div>
      <>
        <p>{curuser.username}</p>
        <p>{curuser.email}</p>
      </>
      <button onClick={() => logout(curuser.username)}>Log out</button>
    </div>
  );
};

export default Profile;
