import React, {useRef} from "react";

function Navbar () {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <div className="navbar">
      <a href="../App.js" className="logo">taskit</a>
      <ul className="nav-list" ref={navRef}>
        <li className="nav-item">
          <a href="../App.js" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="../Contact.js" className="nav-link">Contact</a>
        </li>
        <button onClick={showNavbar} className="close-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </ul>
      <button onClick={showNavbar} className="hamburger-btn">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  )
}

export default Navbar;