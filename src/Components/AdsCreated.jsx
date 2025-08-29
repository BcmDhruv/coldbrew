import React from "react";
import '../Styles/AdsCreated.css';

const AdsCreated = ({ images = [] }) => {
  return (
    <section className="Ac-image-grid">
      <div className="container">
      <h1 className="Ac-h1">Top Performing Creatives</h1>
      </div>
      <div className="Ac-grid-container">
        {images.map((img, index) => (
          <div key={index} className="Ac-card">
            <div className="Ac-card-inner">
              <img src={img} alt={`Ac-Card ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdsCreated;
