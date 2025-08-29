import React from 'react'
import "../Styles/Services.css";
import { Link } from 'react-router-dom';


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
                    <div className="circle">
                        <div className="flip-inner">
                            <div className="flip-front circle-1">
                            High-Impact Brand<br />Films & Campaigns
                            </div>
                            <div className="flip-back">
                            Full-spectrum narratives - planned, filmed, and delivered with precision.
                            </div>
                        </div>
                    </div>

                    <div className="circle">
                        <div className="flip-inner">
                            <div className="flip-front circle-2">
                            Always-On<br />Content Creation
                            </div>
                            <div className="flip-back">
                            Authentic storytelling that blends your brand’s voice, visuals, and vibe.
                            </div>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="flip-inner">
                            <div className="flip-front circle-3">
                            Creative<br />Performance Ads
                            </div>
                            <div className="flip-back">
                            Ads that move the metrics without losing touch with the craft and essence.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="circle">
                        <div className="flip-inner">
                            <div className="flip-front circle-4">
                            Brand<br />Identity Building
                            </div>
                            <div className="flip-back">
                            Distinctive identities blending your voice, visuals, and vibe.
                            </div>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="flip-inner">
                            <div className="flip-front circle-5">
                            Adaptive & AI-<br />Assisted Creativity
                            </div>
                            <div className="flip-back">
                            Smart, scalable creativity without losing depth.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="circle">
                        <div className="flip-inner">
                            <div className="flip-front circle-6">
                            Social Media<br />Design & Strategy
                            </div>
                            <div className="flip-back">
                            Creative that doesn’t just perform but leaves an impact.
                            </div>
                        </div>
                    </div>
                    <div className="circle">
                        <div className="flip-inner">
                            <div className="flip-front circle-7">
                            Website Design
                            </div>
                            <div className="flip-back">
                            Web experiences that balance beauty, clarity, and impact.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-cta">
                <Link to='/case-studies'>
                    <button className="services-btn">Discover Our Work</button>
                </Link>
            </div>
        </div>
        
    </section>
  )
}

export default Services