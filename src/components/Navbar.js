import React, {useRef} from "react";

function Navbar () {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <nav className="navbar">
      <a href="../App.js" className="logo-link">taskit</a>
      <ul className="nav-list" ref={navRef}>
        <li className="nav-item">
          <a href="../App.js" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="../pages/Contact.js" className="nav-link">Contact</a>
        </li>
      </ul>
      <button onClick={showNavbar} className="nav-btn">
        <i class="fa-solid fa-bars"></i>
      </button>
    </nav>
  )
}

export default Navbar;