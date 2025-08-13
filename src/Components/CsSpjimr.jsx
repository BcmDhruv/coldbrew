import React from 'react'
import "../Styles/csSpjimr.css"
import { Link } from 'react-router-dom'

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
                            Yangpoo is an edtech brand offering programs for family business successors and mid-career professionals.
                            </div>

                        <div className="grid-title">Campaign Strategy</div>
                            <div className="grid-content">
                            We built two distinct, persona-led funnels with sharp, human messaging, delivering 25x CTR uplift and a massive drop in CPL for high-intent audiences.
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
                            <Link to="/Yangpoo-case-study">
                            <button className="grid-btn">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default CsSpjimr