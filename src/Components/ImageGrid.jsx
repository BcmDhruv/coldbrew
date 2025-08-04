import React from "react";
import Card from "./Card";
import "../Styles/ImageGrid.css";

import img1 from "/Arks/arks1.png";
import img2 from "/Arks/arks2.png";
import img3 from "/Arks/arks3.png";
import img4 from "/Arks/arks4.png";
import img5 from "/Arks/arks5.png";
import img6 from "/Arks/arks6.png";
import img7 from "/Arks/arks7.png";
import img8 from "/Arks/arks8.png";
import img9 from "/Arks/arks1.png";

const ImageGrid = () => {
  const cards = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
    { image: img9 },
  ];

  return (
    <section className="image-grid">
        <div className="img-container">
            {cards.map((card, index) => (
            <Card
                key={index}
                image={card.image}
                alt={`Card ${index + 1}`}
                text={card.text}
            />
            ))}
        </div>
    </section>

  );
};

export default ImageGrid;
