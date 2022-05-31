import React from "react";

function Navbar () {
  return (
    <div className="navbar">
      <a href="../App.js">taskit</a>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="../App.js" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="../Contact.js" className="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;