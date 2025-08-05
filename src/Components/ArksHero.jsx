import React from 'react'
import "../Styles/ArksHero.css"

const ArksHero = () => {
  return (
    <section className="arkshero">
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-image">
                    <img src="/Arks/redcap.png" alt="" />
                </div>
                <div className="hero-kpis">
                    <div className="kpis-content">
                        <div className="kpis-left">
                            <h1>ARKS</h1>
                            <div className="sectors">
                            <p>Sectors</p>
                            <span>E-commerce, Consumer</span>
                            <hr />
                            </div>
                            
                            <div className="stats">
                            <div className="stat">
                                <h2>30<span>%</span></h2>
                                <p>Increase<br />in engagement</p>
                            </div>
                            <div className="stat">
                                <h2>70<span>%</span></h2>
                                <p>Increase<br />in revenue</p>
                            </div>
                            <div className="stat">
                                <h2>100<span>+</span></h2>
                                <p>Creatives<br />delivered</p>
                            </div>
                            </div>
                        </div>

                        <div className="kpis-right">
                            <p className="intro">
                            ARKS is a lifestyle clothing brand owned by Ranbir Kapoor and it's built around the principles of minimalism, comfort, and quiet luxury. Every product in the lineup is made to elevate everyday essentials through clean design and a calm, intentional aesthetic.
                            When the team first approached us, they had clarity on what the brand stood for - quiet confidence, premium quality, and simplicity done right. What they needed was a creative and performance partner who could bring that vision to life, at scale.
                            When we pitched our approach, the ARKS team was aligned from the first presentation.
                            But winning the pitch was just the beginning.


                            </p>

                            <h3>Campaign Stategy</h3>
                            <p className="objective">
                            The objective was clear: drive consistent daily revenue while maintaining a strong ROAS without diluting the brand's tone.
                            </p>
                            <p>
                            Instead of mass campaigns, we focused on structured segmentation that let us scale with clarity.<br />
                            Our campaign pivots included:
                            </p>
                            <ul>
                            <li>Gender-based targeting</li>
                            <li>Product Categories (Shirts, co-ords, pants, etc.)</li>
                            <li>Funnel stages (cold, warm, hot audiences)</li>
                            </ul>
                            <p>
                            This structure helped us test, learn, and double down on what worked across both creative and audience behavior while keeping the performance engine lean and sharp.
                            </p>
                            <button className="cta-button">BOOK DISCOVERY CALL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArksHero