import React from 'react';
import "../Styles/ArksHero.css";
import { Link } from 'react-router-dom';

const ArksHero = ({ heroData }) => {
  return (
    <section className="arkshero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-image">
            <img src={heroData.imageSrc} alt={heroData.title} />
          </div>
          <div className="hero-kpis">
            <div className="kpis-content">
              <div className="kpis-left">
                <h1>{heroData.title}</h1>
                <div className="sectors">
                  <p>Sectors</p>
                  <span>{heroData.sectors}</span>
                  <hr />
                </div>

                <div className="stats">
                  {heroData.stats}
                </div>
              </div>

              <div className="kpis-right">
                {heroData.rightContent}

                <Link to="/#contact">
                  <button className="cta-button">BOOK DISCOVERY CALL</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArksHero;
