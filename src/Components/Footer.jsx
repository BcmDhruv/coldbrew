import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../Styles/Footer.css"

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // stop reload
      window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll up
    }
  };
  return (
    <footer className={`footer ${isAboutPage ? "about-footer" : ""}`}>
      <div className="footer-top">
        <div className="logo-col">
          {/* <img 
          src={isAboutPage ? "/about-footer-logo.png" : "/footer-logo.png"}
          alt="Cold Brew Studio Logo" className="footer-logo" /> */}
          <Link to="/" onClick={handleLogoClick}>
          <img 
          src={isAboutPage ? "/about-footer-logo.png" :"/coldbrew-footer-logo.png"}
          alt="Cold Brew Studio Logo" className="footer-logo" />
          </Link>
          <Link to="https://blackcoffee.media/">
          <img 
          src="/Bcm-footer-logo.png"
          alt="Bcm Logo" className="footer-logo" />
          </Link>
          
          
        </div>

        <div className="footer-links">

        <div className="footer-col">
          <ul>
            <li><Link to="/#contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            {/* <li><Link to="">Privacy Policy</Link></li> */}
            <li><Link to="/case-studies">Case Studies</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li><Link to="">Instagram</Link></li>
            <li><Link to="">Facebook</Link></li>
            <li><Link to="">LinkedIn</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <p>+91 99207 13935</p>
          <p> <Link to="mailto:brew@blackcoffee.media" >brew@blackcoffee.media</Link></p>
          
        </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; 2025 ColdBrew - Crafted with care. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer