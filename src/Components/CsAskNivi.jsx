import React from 'react'
import "../Styles/csAskNivi.css"
import { Link } from 'react-router-dom'

const CsAskNivi = () => {
  return (
     <section className="csasknivi">
            <div className="case-study-wrapper">
                <div className="leftcol-csasknivi">
                    <div className="cs-grid">
                        <div className="grid-title">About Brand</div>
                            <div className="grid-content">
                            What was the campaign strategy and how was the creative strategy
                            aligned to that. What was the campaign strategy and how was the
                            creative strategy.
                            </div>

                        <div className="grid-title">Campaign Strategy</div>
                            <div className="grid-content">
                            Aligned to that. What was the campaign strategy and how was the
                            creative strategy aligned to that. What was the campaign strategy
                            and how was the creative strategy aligned to that.
                            </div>

                        
                        <div className="grid-kpis">
                            <div className="kpi">
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
                            </div>
                        </div>

                        <div className="grid-button">
                            <Link to='/asknivi-case-study'>
                                <button className="grid-btn">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rightcol-csasknivi">
                    <img className="desktop-img" src="ask-nivi-half.png" alt="Case study image" />
                    <img className="mobile-img" src="nivi.png" alt="" />
                </div>
            </div>
        </section>
  )
}

export default CsAskNivi