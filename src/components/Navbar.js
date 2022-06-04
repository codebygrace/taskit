import React, {useRef} from "react";

function Navbar () {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <div className="navbar">
      <h3 className="logo"><a href="../App.js" className="logo-link">taskit</a></h3>
      <ul className="nav-list" ref={navRef}>
        <li className="nav-item">
          <a href="../App.js" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="../Contact.js" className="nav-link">Contact</a>
        </li>
      </ul>
      <button onClick={showNavbar} className="nav-btn">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  )
}

export default Navbar;