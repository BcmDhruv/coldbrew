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
                            <div className="kpi">
                                <strong>30</strong><span>%</span><br />
                                <small>Increase<br />in engagement</small>
                            </div>
                            <div className="kpi">
                                <strong>70</strong><span>%</span><br />
                                <small>Increase<br />in revenue</small>
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