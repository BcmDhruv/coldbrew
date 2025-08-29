import React from 'react'
import "../Styles/csAskNivi.css"
import { Link } from 'react-router-dom'

const CsAskNivi = () => {
  return (
     <section className="csasknivi">
            <div className="case-study-wrapper">
                <div className="leftcol">
                    <div className="cs-grid">
                        <div className="grid-title">About Brand</div>
                            <div className="grid-content">
                            askNivi is a private, AI-powered WhatsApp chatbot for women’s health conversations.
                            </div>

                        <div className="grid-title">Campaign Strategy</div>
                            <div className="grid-content">
                            We created low-friction, trust-first creatives like “Scan the Code” that tripled conversations and made it safer for women to ask sensitive questions anonymously.
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
                            <Link to='/asknivi-case-study'>
                                <button className="grid-btn">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rightcol">
                    <img className="desktop-img" src="nivi-half.webp" alt="Case study image" />
                    <img className="mobile-img" src="nivi.webp" alt="Case Study Image" />
                </div>
            </div>
        </section>
  )
}

export default CsAskNivi