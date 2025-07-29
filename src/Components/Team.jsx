import React from 'react'
import "../Styles/Team.css"

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
                        <img src="https://blackcoffee.media/wp-content/themes/betheme/img/team/Kirtan.png" alt="Kirtan" />
                        </div>
                        <h3>Kirtan Mankad</h3>
                        <p>Co - Founder</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="https://blackcoffee.media/wp-content/themes/betheme/img/team/2.png" alt="Siddharth" />
                        </div>
                        <h3>Siddharth Padmanabhan</h3>
                        <p>Co - Founder</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="https://blackcoffee.media/wp-content/uploads/2025/06/Nikhil-sir.png" alt="Siddharth" />
                        </div>
                        <h3>Siddharth Padmanabhan</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className="row">
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="https://blackcoffee.media/wp-content/uploads/2025/06/Nikhil-sir.png" alt="Siddharth" />
                        </div>
                        <h3>Siddharth Padmanabhan</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="https://blackcoffee.media/wp-content/uploads/2025/06/Nikhil-sir.png" alt="Siddharth" />
                        </div>
                        <h3>Siddharth Padmanabhan</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className="row">
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="https://blackcoffee.media/wp-content/uploads/2025/06/sahil-sir.png" alt="Siddharth" />
                        </div>
                        <h3>Siddharth Padmanabhan</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="team-member-wrapper">
                        <div className="team-circle">
                        <img src="https://blackcoffee.media/wp-content/uploads/2025/06/sahil-sir.png" alt="Siddharth" />
                        </div>
                        <h3>Siddharth Padmanabhan</h3>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div className="team-member-cta">
                <button className="btn">See Our Work</button>
            </div>
        </div>
    </section>

  )
}

export default Team