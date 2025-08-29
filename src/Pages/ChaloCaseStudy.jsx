import React from 'react'
import ServiceProvided from '../Components/ServiceProvided';
import serviceImg from '/Chalo/Chalo-Services.webp';
import AdsCreated from '../Components/AdsCreated';
import FAQs from '../Components/FAQs';
import ImageGrid from '../Components/ImageGrid';
import '../Styles/CaseStudyPages/ChaloCaseStudy.css'
import ArksHero from '../Components/ArksHero';
import { Link } from 'react-router-dom';

const ChaloCaseStudy = () => {
    const imageUrls = [
    "/Chalo/Chalo_Img1.webp",
    "/Chalo/Chalo_Img2.webp",
    "/Chalo/Chalo_img3.jpg"
    ];
    const chaloImages = [
    "/Chalo/chalo1.webp",
    "/Chalo/chalo2.webp",
    "/Chalo/chalo3.webp",
    "/Chalo/chalo4.webp",
    "/Chalo/chalo5.webp",
    "/Chalo/chalo6.webp",
    "/Chalo/chalo7.webp",
    "/Chalo/chalo8.webp",
    "/Chalo/chalo9.webp"
    ];

    const processImages = [
    "/Chalo/ChaloProcess1.webp",
    "/Chalo/ChaloProcess2.webp",
    "/Chalo/ChaloProcess3.webp"
    ];

   const faqs = [
        {
        number: "01/",
        title: "Objective",
        content: (
            <section className="objective-accordian">
            <div className="objective-wrapper">
                <h2>Goals</h2>
                <p>
                Position Chalo as the smarter daily commute option for Mumbai professionals and drive first-time ride conversions. The focus was on turning awareness into action through promo passes and subscription trials
                </p>
            </div>
            </section>
        ),
        },
        {
        number: "02/",
        title: "Process",
        content: (
            <section className="process-accordian">
            <div className="process-wrapper">
                <p>Every creative we made followed three core principles:</p>
                <div className="process-images">
                {processImages.map((img, index) => (
                    <div key={index} className="process-card">
                    <div className="process-card-inner">
                        <img src={img} alt={`process-card-${index + 1}`} />
                    </div>
                    </div>
                ))}
                </div>
                <div>
                <p>
                    This mix allowed us to capture intent, lower acquisition costs, and position Chalo as a lifestyle upgrade
                </p>
                <p>
                    We made short videos, static posts, and simple visuals that showed a before-and-after commute experience and kept the tone casual, confident, and practical.
                </p>
                
                </div>
            </div>
            </section>
        ),
        },
        {
        number: "03/",
        title: "Impact",
        content: (
            <div className='impact-wrappper'>
                <p>Our work helped Chalo:</p>
                    <ul>
                    <li><strong>Activate thousands of first rides</strong> through city-level campaigns</li>
                    <li><strong>Boost funnel performance</strong> by focusing on real-user behavior and key conversions</li>
                    <li><strong>Build a creative system</strong> tuned to both commuter mood and mindset</li>
                    <li><strong>Position Chalo as a lifestyle upgrade,</strong> not just a commute option</li>
                    </ul>
                <Link to="/#contact">
                  <button className="cta-button">BOOK DISCOVERY CALL</button>
                </Link>
            </div>
        ),
        },
    ];

    const arksHeroData = {
    imageSrc: "/Chalo/Chalo-hero.jpg",
    title: "CHALO",
    sectors: "Mobility",
    stats: (
        <>
        <div className="stat">
            <h2>30<span>%</span></h2>
            <p>Increase<br />in engagement</p>
        </div>
        <div className="stat">
            <h2>70<span>%</span></h2>
            <p>Increase<br />in revenue</p>
        </div>
        <div className="stat">
            <h2>100<span>+</span></h2>
            <p>Creatives<br />delivered</p>
        </div>
        </>
    ),
    rightContent: (
        <>
        <p className="intro">
            <p>Chalo is a subscription commute service for Mumbai professionals - they offer guaranteed seats, express routes, and stress-free rides at a fraction of cab costs. Beyond routes and pricing, the brand is about the relief of always having a seat and the ease of reaching work without chaos.</p>
        </p>

        <h3>Campaign Strategy</h3>
        <p className="objective">
            Our goal: drive first-time ride conversions through promo passes.
        </p>
        <p>
            We built a performance engine that was:
        </p>
        <ul>
            <li><strong>Hyperlocal:</strong> Every campaign was tightly geo-targeted within Mumbai</li>
            <li><strong>Funnel-Smart:</strong>We optimised for deeper funnel events like pass views and redemptions.</li>
            <li><strong>Cross-Platform:</strong>Ran app installs and re-engagement campaigns across Google and Mets</li>
        </ul>
        <p>
            We were trying to sell a better way to get to work, and our funnel was built to reflect that.
        </p>
        </>
    )
  };

  return (
    <div className='chalo-cs-bg'>
    <ArksHero heroData={arksHeroData} />
    <ServiceProvided  image={serviceImg} />
    <AdsCreated images={imageUrls} />
    <FAQs faqs={faqs} />
    <ImageGrid images={chaloImages} />
    </div>
  )
}

export default ChaloCaseStudy









