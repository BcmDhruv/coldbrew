import React from 'react'
import "../Styles/AboutUs.css";


const AboutUs = () => {
  return (
    <section className="aboutus">

        <div className="container">
            <div className="aboutus-heading">
                <h1>About Us</h1>
            </div>
            <div className="aboutus-main">
                <p><strong>We're ColdBrew.</strong> </p>
                <p>A creative studio built on one belief - “the best ideas always come from the people"</p>
                <p>We study the scrolls, swipes, and silences to see what really matters to your audience. Then we build work that doesn’t just look good but lands.</p>
                <p>We’ve shaped eCommerce launches, culture-led campaigns, mobility brands, and lifestyle labels.</p>
                <p>Different industries, but one common thread:</p>
                <p>“Knowing how to meet people where they are and move them where they’ll go next”</p>
                <p>Insight-driven, taste-backed, built for impact.</p>
                <p><strong>This is ColdBrew.</strong></p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs