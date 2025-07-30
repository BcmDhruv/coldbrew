import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../Styles/Header.css"



const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAboutPage = location.pathname === "/about";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isAboutPage ? "about-header" : ""}`}>
      <div className="header-content">
        <Link to="/"><img
        src={isAboutPage ? "/about-header-logo.png" : "/coldbrew-logo.png"}
        alt="Cold Brew Logo" className="logo" /></Link>
        

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 32 32">
            <path
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              className="line line-top-bottom"
            ></path>
            <path d="M7 16 27 16" className="line"></path>
          </svg>
        </button>
      </div>

      <nav className={`dropdown ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/case-studies" className="nav-link" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
          <li><Link to="#" className="cta" onClick={() => setMenuOpen(false)}>Book Discovery Call</Link></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
