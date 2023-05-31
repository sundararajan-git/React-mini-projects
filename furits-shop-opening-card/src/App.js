import React from "react";
import Image from "./image";
import Card from "./card";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Image />
          <Card />
        </div>
      </>
    );
  }
}

export default App;
