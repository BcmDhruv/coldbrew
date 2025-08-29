import React from 'react'
import "../Styles/Stories.css";
import { Link } from 'react-router-dom';


const Stories = () => {
  return (
    <section className="stories">
        <div className="container">
            <div className="stories-heading">
                <h1>Stories We've Crafted</h1>
            </div>
            <div className="stories-flex">
                <div className="stories-section">
                    <div className="stories-left">
                        <div className="stories-circle story-1-bg">Shaping Impact<br />Led Brands</div>
                    </div>
                    <div className="stories-right">
                        <p>With stories that spark change and drive impact.</p>
                        <Link to="/case-studies">
                        <button className="stories-cta">Explore Our Case Studies</button>
                        </Link>
                    </div>
                </div>
                <div className="stories-section">
                    <div className="stories-left">
                        <div className="stories-circle story-2-bg">Cultivating <br /> Educational Brands</div>
                    </div>
                    <div className="stories-right">
                        <p>With narratives that teach, engage, and last.</p>
                        <Link to="/case-studies">
                        <button className="stories-cta">Explore Our Case Studies</button>
                        </Link>
                    </div>
                </div>
                <div className="stories-section">
                    <div className="stories-left">
                        <div className="stories-circle story-3-bg">Driving Mobility <br /> Brands</div>
                    </div>
                    <div className="stories-right">
                        <p>With campaigns that connect, engage, and drive growth.</p>
                        <Link to="/case-studies">
                        <button className="stories-cta">Explore Our Case Studies</button>
                        </Link>
                    </div>
                </div>
                <div className="stories-section">
                    <div className="stories-left">
                        <div className="stories-circle story-4-bg">Crafting Lifestyle <br /> Brands</div>
                    </div>
                    <div className="stories-right">
                        <p>With visuals that captivate and experiences that stay.</p>
                        <Link to="/case-studies">
                        <button className="stories-cta">Explore Our Case Studies</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stories