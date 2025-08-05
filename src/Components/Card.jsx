import React from "react";
import "../Styles/Card.css";

const Card = ({ image, alt, onArrowClick }) => {
  return (
    <div className="card">
      <img src={image} alt={alt} className="card-image" />
      <div className="card-hover">
        <div className="hover-text">
          <div>
            <h3>Check Out</h3>
            <p>Creative Ads</p>
          </div>
          <div className="arrow" onClick={onArrowClick}>↗</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
