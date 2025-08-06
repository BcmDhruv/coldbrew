import React from 'react'
import "../Styles/csSpjimr.css"

const CsSpjimr = () => {
  return (
     <section className="csspjimr">
            <div className="case-study-wrapper2">
                <div className="leftcol-csspjimr">
                    <img className="desktop-img" src="spjimr-half.png" alt="Case study image" />
                    <img className="mobile-img" src="spjimr.png" alt="" />
                </div>


                <div className="rightcol-csspjimr">
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
                            <button className="grid-btn">Explore</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default CsSpjimr