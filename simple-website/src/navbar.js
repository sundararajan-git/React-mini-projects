import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="header">
        <nav>
          <h1>LOGO</h1>
          <label htmlFor="bar" className="bar">
            <i class="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" id="bar" />
          <ul id="ul">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">HELP</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
