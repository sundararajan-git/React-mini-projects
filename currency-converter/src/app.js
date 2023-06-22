import React, { useState } from "react";

export default function App() {
  const [currency, setcurrency] = useState(["USD", "INR", "EURO"]);
  const [value, set] = useState({ inr: undefined, usd: undefined });

  const handlechange = () => {};
  const usdtoINR = (e) => {
    set({ inr: e.target.value * (82.4).toPrecision(5) });
  };
  return (
    <div className="container">
      <div className="currency">
        <select id="from" onChange={handlechange}>
          <option>{currency[0]}</option>
        </select>
        <span> </span>
        <select>
          <option>{currency[1]}</option>
        </select>
      </div>
      <div className="output">
        <input type="text" onChange={usdtoINR} value={value.usd} />
        <span> </span>
        <input
          type="text"
          onChange={(e) => set({ usd: (e.target.value / 82.4).toPrecision(3) })}
          value={value.inr}
        />
      </div>
      <button
        onClick={() => {
          set({ inr: "", usd: "" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
