import React from 'react'
import "../Styles/Services.css";


function Services() {
  return (
        <section className="services">
        <div className="container">
            <div className="services-heading">
                <h1>What we do, we do with intent</h1>
                <p>Creative built to perform <br /> every format, every platform, every time.</p>
            </div>
            
            <div className="services-flex">
                <div className="row">
                    <div className="circle circle-1">
                        <div className="flip-inner">
                            <div className="flip-front">
                            High-Impact Brand<br />Films & Campaigns
                            </div>
                            <div className="flip-back">
                            Full-spectrum narratives - planned, filmed, and delivered with precision.
                            </div>
                        </div>
                    </div>
                    <div className="circle circle-2">
                        <div className="flip-inner">
                            <div className="flip-front">
                            Always-On<br />Content Creation
                            </div>
                            <div className="flip-back">
                            Authentic storytelling that blends your brand’s voice, visuals, and vibe.
                            </div>
                        </div>
                    </div>
                    <div className="circle circle-3">
                        <div className="flip-inner">
                            <div className="flip-front">
                            Creative<br />Performance Ads
                            </div>
                            <div className="flip-back">
                            Ads that move the metrics without losing touch with the craft and essence.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="circle circle-4">
                        <div className="flip-inner">
                            <div className="flip-front">
                            Brand<br />Identity Building
                            </div>
                            <div className="flip-back">
                            Authentic storytelling that blends your brand’s voice, visuals, and vibe.
                            </div>
                        </div>
                    </div>
                    <div className="circle circle-5">
                        <div className="flip-inner">
                            <div className="flip-front">
                            Adaptive & AI-<br />Assisted Creativity
                            </div>
                            <div className="flip-back">
                            Smart, scalable creativity without losing depth.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="circle circle-6">
                        <div className="flip-inner">
                            <div className="flip-front">
                            Social Media<br />Design & Strategy
                            </div>
                            <div className="flip-back">
                            Creative that doesn’t just perform but leaves an impact.
                            </div>
                        </div>
                    </div>
                    <div className="circle circle-7">
                        <div className="flip-inner">
                            <div className="flip-front">
                            Website Design
                            </div>
                            <div className="flip-back">
                            Full-spectrum narratives - planned, filmed, and delivered with precision.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-cta">
                <button className="btn">See Our Work</button>
            </div>
        </div>
        
    </section>
  )
}

export default Services