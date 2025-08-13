// ImageGrid.jsx
import React, { useState } from "react";
import Card from "./Card";
import "../Styles/ImageGrid.css";

const ImageGrid = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="image-grid">
      <div className="img-container">
        {images.map((img, index) => (
          <Card
            key={index}
            image={img}
            alt={`${title || "Image"} ${index + 1}`}
            onArrowClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Full View" className="modal-image" />
            {title && <h1>{title}</h1>}
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGrid;
