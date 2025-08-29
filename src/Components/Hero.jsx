import React from 'react'
import "../Styles/Hero.css";
import { Link } from 'react-router-dom';



function Hero() {
  return (
        <section className="hero">
        
            <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            className="hero-video"
            aria-hidden="true"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
            <div className="hero-main">
                <h1>Creative That Knows What Clicks</h1>
                <h3>Built for brands that want more than just likes.</h3>
                <Link to='/case-studies'>
                <button className="hero-btn">Discover Our Work</button>
                </Link>
            </div>
        
        </section>  
  )
}

export default Hero
