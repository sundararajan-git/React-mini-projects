import React from "react";

const About = ({ userDetail, logout }) => {
  console.log(userDetail);
  return (
    <div>
      <></>
      <button onClick={() => logout(userDetail.username)}>Log out</button>
    </div>
  );
};

export default About;
