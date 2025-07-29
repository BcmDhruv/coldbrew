import React from "react";
import "../Styles/Brands.css"


const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-heading">
          <h1>
            We don’t just make noise<br />
            <span>We make winners</span>
          </h1>
        </div>
      </div>

        <div className="brands-main">
          <div className="marquee-slider">
            <div className="marquee-track">
              <img src="/logos/arks.png" alt="arks-logo" />
              <img src="/logos/chalo.png" alt="chalo logo" />
              <img src="/logos/nivi.png" alt="nivi logo" />
              <img src="/logos/sharechat.png" alt="sharechat logo" />
              <img src="/logos/weschool.png" alt="weshool logo" />
              <img src="/logos/arks.png" alt="arks-logo" />
              <img src="/logos/chalo.png" alt="chalo logo" />
              <img src="/logos/nivi.png" alt="nivi logo" />
              <img src="/logos/sharechat.png" alt="sharechat logo" />
              <img src="/logos/weschool.png" alt="weshool logo" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="brands-kpi">
            <div className="stat-box">
              <img src="./icon1.png" alt="Brands Served Icon" />
              <h3>100+</h3>
              <p>Brands Served</p>
            </div>
            <div className="stat-box">
              <img src="./icon2.png" alt="Creatives Made Icon" />
              <h3>10000+</h3>
              <p>Creatives Made</p>
            </div>
            <div className="stat-box">
              <img src="./icon3.png" alt="Winner Creatives Scaled Icon" />
              <h3>3000+</h3>
              <p>Winner Creatives Scaled</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Brands;
