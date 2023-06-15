import React, { useState } from "react";
import Notelist from "./component/Notelist";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <Notelist />
    </div>
  );
};

export default App;
