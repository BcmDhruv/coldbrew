import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import FAQs from '../Components/FAQs';
import serviceImg from '/Yangpoo/Yangpoo-Services.webp'
import ServiceProvided from '../Components/ServiceProvided';
import AdsCreated from '../Components/AdsCreated';
import '../Styles/CaseStudyPages/YangpooCaseStudy.css'
import { Link } from 'react-router-dom';
import ArksHero from '../Components/ArksHero';

const YangpooCaseStudy = () => {

    const imageUrls = [
        "/Yangpoo/YangpooImg1.webp",
        "/Yangpoo/YangpooImg2.webp",
        "/Yangpoo/YangpooImg3.webp"

    ]

    const YangpooImg = [
        "/Yangpoo/Yangpoo1.webp",
        "/Yangpoo/Yangpoo2.webp",
        "/Yangpoo/Yangpoo3.webp",
        "/Yangpoo/Yangpoo4.webp",
        "/Yangpoo/Yangpoo5.webp",
        "/Yangpoo/Yangpoo6.webp",
        "/Yangpoo/Yangpoo7.webp",
        "/Yangpoo/Yangpoo8.webp",
        "/Yangpoo/Yangpoo9.webp",
    ]

    const processImages = [
    "/Yangpoo/YangpooProcess1.webp",
    "/Yangpoo/YangpooProcess2.webp",
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
                Attract the right high-intent learners for Yangpoo’s executive programs - young individuals from family businesses and mid-career professionals - by building funnels that spoke directly to their distinct goals.
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
                    Both funnels were optimized for lead quality and paired with human-centered creative that emphasized clarity, confidence, and actionable storytelling. This shift moved Yangpoo away from jargon-heavy ads and into persona-driven campaigns that triggered real engagement.
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
            <ul>
              <li><strong>Both programs saw a steady pipeline of high-quality paid applications and a significant jump from prior efforts.</strong></li>
              <li><strong>Lead-to-application ratios improved across the board due to tighter segmentation and user-specific messaging</strong></li>
            </ul>
            <Link to="/#contact">
              <button className="cta-button">BOOK DISCOVERY CALL</button>
            </Link>
        </div>
        ),
        },
    ];

      const arksHeroData = {
  imageSrc: "/Yangpoo/Yangpoo-Hero.webp",
  title: "Yangpoo",
  sectors: "Education",
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
    <h3>Introduction:</h3>
      <p className="intro">
        Yangpoo Executive Education is an edtech brand focused on bridging the gap between academia and real-world business readiness. Through its specialized programs and partnerships, Yangpoo helps learners transition into leadership roles and prepare for high-stakes business decisions
      </p>

      <h3>Campaign Strategy</h3>
      <p className="objective">
        We built two completely distinct, intent-driven funnels:
      </p>
      <p>
        <strong>Family Business Programme Funnel</strong> 
      </p>
      <ul>
        <li>Targeted people from business families using interest layering and behavioral signals</li>
        <li>Ad messaging revolved around identity and confidence: “Take the reins, “Lead your legacy.”, Enter the family business on your terms.”</li>
        <li>The landing flow reinforced that support to help them make the decision.</li>
      </ul>
      <p>
        <strong>Hybrid PGDM Funnel</strong> 
      </p>
      <ul>
        <li>Focused on professionals in mid-senior roles across industries</li>
        <li>Messaging was all about bridging the gap: “From working professional to strategic leader”, “Your next move deserves the right backing”.</li>
      </ul>
      
    </>
  )
  };
    

  return (
    
    <div className='yp-cs-bg'>
    <ArksHero heroData={arksHeroData} />
    <ServiceProvided image={serviceImg} />
    <AdsCreated images = {imageUrls} />
    <FAQs faqs={faqs} />
    <ImageGrid images={YangpooImg} />
    </div>
  )
}

export default YangpooCaseStudy