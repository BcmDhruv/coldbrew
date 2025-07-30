import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../Styles/Footer.css"

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  return (
    <footer className={`footer ${isAboutPage ? "about-footer" : ""}`}>
      <div className="footer-top">
        <div className="logo-col">
          <img 
          src={isAboutPage ? "/about-footer-logo.png" : "/footer-logo.png"}
          alt="Cold Brew Studio Logo" className="footer-logo" />
        </div>

        <div className="footer-links">

        <div className="footer-col">
          <ul>
            <li><Link to="">Contact Us</Link></li>
            <li><Link to="">About Us</Link></li>
            <li><Link to="">Privacy Policy</Link></li>
            <li><Link to="">Case Studies</Link></li>
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