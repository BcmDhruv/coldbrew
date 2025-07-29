// src/Components/LoaderText.jsx
import React from "react";
import "../Styles/LoaderText.css";

const LoaderText = () => {
  return (
    <div className="loader-wrapper">
      <span className="loader-letter">B</span>
      <span className="loader-letter">R</span>
      <span className="loader-letter">E</span>
      <span className="loader-letter">W</span>
      <span className="loader-letter">I</span>
      <span className="loader-letter">N</span>
      <span className="loader-letter">G</span>
      <span className="loader-letter">.</span>
      <span className="loader-letter">.</span>
      <span className="loader-letter">.</span>
      <div className="loader"></div>
    </div>
  );
};

export default LoaderText;
