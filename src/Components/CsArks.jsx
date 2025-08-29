import React from 'react'
import "../Styles/csArks.css"
import { Link } from 'react-router-dom'

const CsArks = () => {
  return (
        <section className="csarks">
            <div className="case-study-wrapper">
                <div className="leftcol">
                    <div className="cs-grid">
                        <div className="grid-title">About Brand</div>
                            <div className="grid-content">
                            ARKS is Ranbir Kapoor’s menswear brand rooted in quiet luxury, minimalism, and comfort.
                            </div>

                        <div className="grid-title">Campaign Strategy</div>
                            <div className="grid-content">
                            We’ve built high ROAS campaigns through segmented funnels and clean, product-led creatives, scaling revenue by 5x without relying on heavy discounts.
                            </div>

                        
                        <div className="grid-kpis">
                            {/* <div className="kpi">
                                <div className="kpi-numbers">
                                <h1>30</h1><span>%</span><br />
                                </div>
                                <p>Increase<br />in engagement</p>
                            </div>
                            <div className="kpi">
                                <div className="kpi-numbers">
                                <h1>70</h1><span>%</span><br />
                                </div>
                                <p>Increase<br />in revenue</p>
                            </div> */}
                        </div>

                        <div className="grid-button">
                            <Link to='/arks-case-study'>
                            <button className="grid-btn">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rightcol">
                    <img className="desktop-img" src="arks-half.webp" alt="Case study image" />
                    <img className="mobile-img" src="arks.webp" alt="case study image" />
                </div>
            </div>
        </section>
  )
}

export default CsArks