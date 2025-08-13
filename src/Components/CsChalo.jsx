import React from 'react'
import "../Styles/csChalo.css"
import { Link } from 'react-router-dom'

const CsChalo = () => {
  return (
        <section className="cschalo">
            <div className="case-study-wrapper2">
                <div className="leftcol-cschalo">
                    <img className="desktop-img" src="chalo-half.png" alt="Case study image" />
                    <img className="mobile-img" src="chalo.png" alt="" />
                </div>


                <div className="rightcol-cschalo">
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
                            <div className="o-kpi">
                                <div className="o-kpi-numbers">
                                <h1>30</h1><span>%</span><br />
                                </div>
                                <p>Increase<br />in engagement</p>
                            </div>
                            <div className="o-kpi">
                                <div className="o-kpi-numbers">
                                <h1>70</h1><span>%</span><br />
                                </div>
                                <p>Increase<br />in revenue</p>
                            </div>
                        </div>

                        <div className="grid-button">
                            <Link to='/chalo-case-study'>
                                <button className="grid-btn">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default CsChalo