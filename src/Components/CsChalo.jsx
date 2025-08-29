import React from "react";
import "../Styles/csChalo.css";
import { Link } from "react-router-dom";

const CsChalo = () => {
  return (
    <section className="cschalo">
      <div className="case-study-wrapper">
        <div className="leftcol">
          <div className="cs-grid">
            <div className="grid-title">About Brand</div>
            <div className="o-grid-content">
             Chalo is a smart, subscription-based bus commute service for working professionals in Mumbai.
            </div>

            <div className="grid-title">Campaign Strategy</div>
            <div className="o-grid-content">
             We hyper-targeted pain points of daily travel like selling peace, not passes, leading to a 360% rise in first rides and a 19x conversion boost in best-performing campaigns.
            </div>

            <div className="grid-kpis">
              {/* <div className="kpi">
                <div className="kpi-numbers">
                  <h1>30</h1>
                  <span>%</span>
                  <br />
                </div>
                <p>
                  Increase
                  <br />
                  in engagement
                </p>
              </div>
              <div className="kpi">
                <div className="kpi-numbers">
                  <h1>70</h1>
                  <span>%</span>
                  <br />
                </div>
                <p>
                  Increase
                  <br />
                  in revenue
                </p>
              </div> */}
            </div>

            <div className="grid-button">
              <Link to="/chalo-case-study">
                <button className="o-grid-btn" >Explore</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="rightcol">
          <img
            className="desktop-img"
            src="chalo-half.webp"
            alt="Case study image"
          />
          <img className="mobile-img" src="chalo.webp" alt="case study image" />
        </div>
      </div>
    </section>
  );
};

export default CsChalo;
