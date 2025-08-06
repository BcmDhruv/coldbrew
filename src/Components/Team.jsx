import React from 'react'
import "../Styles/Team.css"
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <section className="team-member">
        <div className="container">
            <div className="team-member-heading">
                <h1>Meet The Team</h1>
            </div>
            <div className="team-member-flex">
                <div className="row">
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="/team/Kirtan.png" alt="Kirtan" />
                        </div>
                        <h3>Kirtan Mankad</h3>
                        <p>Co - Founder</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="/team/sid.png" alt="Siddharth" />
                        </div>
                        <h3>Siddharth Padmanabhan</h3>
                        <p>Co - Founder</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="/team/Sairi.png" alt="Siddharth" />
                        </div>
                        <h3>Sairindhri Sengupta</h3>
                        <p>Creative Director</p>
                    </div>
                </div>
                <div className="row">
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="/team/Neel.png" alt="Siddharth" />
                        </div>
                        <h3>Neelakantan Krishnan</h3>
                        <p>Client Success Manager</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="/team/Jalnidhi.png" alt="Siddharth" />
                        </div>
                        <h3>Jalnidhi Saurabh Singh</h3>
                        <p>Junior Copywriter</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="/team/Ankit.png" alt="Siddharth" />
                        </div>
                        <h3>Ankit Solanki</h3>
                        <p>Senior Graphic Designer</p>
                    </div>
                </div>
                <div className="row">
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="/team/Parneet.png" alt="Siddharth" />
                        </div>
                        <h3>Parneet Kaur</h3>
                        <p>Experience Designer</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="/team/Bilal.png" alt="Siddharth" />
                        </div>
                        <h3>Mohammad Bilal</h3>
                        <p>Junior Graphic Designer</p>
                    </div>
                </div>
            </div>
            <div className="team-member-cta">
            <Link to='/case-studies'>
                <button className="btn">See Our Work</button>
            </Link>
            </div>
        </div>
    </section>

  )
}

export default Team