import React from "react";

const About = ({ curuser, logout }) => {
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

export default About;
