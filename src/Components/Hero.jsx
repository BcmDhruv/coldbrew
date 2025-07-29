import React from 'react'
import "../Styles/Hero.css";


function Hero() {
  return (
        <section className="hero">
        
            <video autoPlay muted loop playsinline className="hero-video">
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
            <div className="hero-main">
                <h1>Creative that knows what clicks</h1>
                <h3>Built for brands that want more than just likes.</h3>
                <button className="hero-btn">Watch the work</button>
            </div>
        
        </section>  
  )
}

export default Hero
