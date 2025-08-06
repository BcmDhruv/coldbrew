import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react'
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import Services from "../Components/Services";
import ContactUs from '../Components/ContactUs';

const Home = () => {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <div ref={contactRef}>
      <ContactUs  />
      </div>
    </>
  );
};

export default Home