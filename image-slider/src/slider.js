import React, { useEffect, useState } from "react";
import HTML from "./HTML.jpg";
import CSS from "./CSS.jpg";
import JS1 from "./JS1.jpg";
import JS2 from "./JS2.jpg";
import REACT from "./REACT.jpg";

export default function Slider() {
  const [image, setimage] = useState([HTML, CSS, JS1, JS2, REACT]);
  const [num, setnum] = useState(0);
  const backward = () => {
    if (num == 0) {
      setnum(4);
    } else {
      setnum(num - 1);
    }
  };
  const forward = () => {
    if (num == 4) {
      setnum(num - 4);
    } else {
      setnum(num + 1);
    }
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     setnum(num + 1);
  //     if (num == 4) {
  //       setnum(0);
  //     }
  //   }, 5000);
  // });
  return (
    <>
      <a onClick={backward} id="left">
        <i className="fa-solid fa-chevron-left fa-2xl"> </i>
      </a>
      <div className="container">
        <img src={image[num]}></img>
      </div>
      <a onClick={forward} id="right">
        <i className="fa-solid fa-chevron-right fa-2xl"></i>
      </a>
    </>
  );
}
