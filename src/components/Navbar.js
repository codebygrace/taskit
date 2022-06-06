import React, {useRef} from "react";

function Navbar () {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <nav className="navbar">
      <a href="/" className="logo-link">taskit</a>
      <ul className="nav-list" ref={navRef}>
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
      <button onClick={showNavbar} className="nav-btn">
        <i class="fa-solid fa-bars"></i>
      </button>
    </nav>
  )
}

export default Navbar;