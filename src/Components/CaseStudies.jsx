import React from 'react'
import "../Styles/CaseStudies.css"

const CaseStudies = () => {

  const handleScroll = () => {
    const section = document.getElementById('csarks');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
        <section className="casestudy">
        <div className="container">
            <div className="casestudy-heading">
                <h1>Case Studies</h1>
            </div>
            <div className="casestudy-main">
                <p>Coldbrew Studio is a process.</p>
                <p>A process that is slow, careful, patient, and led with purpose</p>
                <p>We believe that every brand has layers - layers of values, stories, and visuals, and it’s our job to bring them out.</p>
                <div className="team-member-cta">
                    <button className="services-btn" onClick={handleScroll}>Discover Our Work</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CaseStudies