import React, { useState } from "react";

export default function App() {
  let code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const [hexcode, sethexcode] = useState(code);
  const [color, setcolor] = useState("FFFFF");

  const changeColor = () => {
    let c = [];
    for (let i = 1; i <= 6; i++) {
      c += randnum();
    }
    setcolor(c);
  };
  const randnum = () => {
    const num = Math.floor(Math.random() * hexcode.length);
    return hexcode[num];
  };

  return (
    <div>
      <div className="head">
        <p>Color Fliper</p>
        <p>#{color}</p>
      </div>
      <div className="container" style={{ backgroundColor: `#${color}` }}>
        <button onClick={changeColor}>Change Background</button>
      </div>
    </div>
  );
}
