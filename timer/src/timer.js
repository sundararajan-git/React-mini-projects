import React, { useState, useEffect } from "react";

export default function Timer() {
  let [time, settime] = useState(0);
  const [isRuning, setRunning] = useState(false);
  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;
  useEffect(() => {
    let interval;
    if (isRuning) {
      interval = setInterval(() => {
        settime(time++);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRuning, time]);
  return (
    <div>
      <div>
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </div>
      <button
        onClick={() => {
          setRunning(!isRuning);
        }}
      >
        {isRuning ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          settime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
