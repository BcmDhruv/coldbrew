import React from 'react';
import '../Styles/ServiceProvided.css';

const ServiceProvided = ({ image }) => {
  return (
    <section className="service-provided">
      <div className="container">
        <div className="service-provided-wrapper">
          <div className="service-img">
            <img src={image} alt="Service Steps" />
          </div>
          <div className="service-provided-heading">
            <h1>Services provided</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProvided;
