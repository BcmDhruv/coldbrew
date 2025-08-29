import React from 'react'
import "../Styles/csYangpoo.css"
import { Link } from 'react-router-dom'

const CsYangpoo = () => {
  return (
     <section className="csyangpoo">
            <div className="case-study-wrapper">
                <div className="leftcol">
                    <div className="cs-grid">
                        <div className="grid-title">About Brand</div>
                            <div className="o-grid-content">
                            Yangpoo is an edtech brand offering programs for family business successors and mid-career professionals.
                            </div>

                        <div className="grid-title">Campaign Strategy</div>
                            <div className="o-grid-content">
                            We built two distinct, persona-led funnels with sharp, human messaging, delivering 25x CTR uplift and a massive drop in CPL for high-intent audiences.
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
                            <Link to='/yangpoo-case-study'>
                            <button className="o-grid-btn">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rightcol">
                    <img className="desktop-img" src="yangpoo-half.webp" alt="Case study image" />
                    <img className="mobile-img" src="yangpoo.webp" alt="case study image" />
                </div>
            </div>
        </section>
  )
}

export default CsYangpoo