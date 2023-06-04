import React, { useEffect, useState } from "react";

export default function Time() {
  const [time, settime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      settime(new Date());
    }, 1000);
  });
  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}
