import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import ServiceProvided from '../Components/ServiceProvided';
import serviceImg from '/Nivi/Nivi-Services.png';
import '../Styles/CaseStudyPages/NiviCaseStudy.css'
import FAQs from '../Components/FAQs';
import ArksHero from '../Components/ArksHero';
import AdsCreated from '../Components/AdsCreated';

const NiviCaseStudy = () => {

    const imageUrls = [
      "/Nivi/NiviImg1.webp",
      "/Nivi/NiviImg2.webp",
      "/Nivi/NiviImg3.webp"
    ]

    const niviImages = [
    "/Nivi/nivi1.jpg",
    "/Nivi/nivi2.jpg",
    "/Nivi/nivi3.jpg",
    "/Nivi/nivi4.jpg",
    "/Nivi/nivi5.jpg",
    "/Nivi/nivi6.jpg",
    "/Nivi/nivi7.jpg",
    "/Nivi/nivi8.jpg",
    "/Nivi/nivi9.jpg"
];

const processImages = [
  "/Nivi/NiviProcess1.png",
  "/Nivi/NiviProcess2.png",
  "/Nivi/NiviProcess3.png",
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
            Aligned to thatWhat was the campaign strategy and how was the creative strategy aligned to thatWhat was the campaign strategy and how was the creative strategy aligned to thatWhat was the campaign strategy and how was the creative strategy aligned to What was the campaign strategy and how was the creative strategy aligned to that
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
                We didn't rely on Ranbir's face to carry the narrative but relied on visuals that built brand memory and product trust on their own. In fact, while RK-led creatives performed well, some of our highest ROAS came from product-led assets with clean, minimal compositions.
            </p>
            <ul>
                <li>
                <strong>Creatives with strong contrast between foreground and background (like red-on-white or white-on-red) consistently led in performance.</strong>
                </li>
                <li>
                <strong>Accessories and footwear creatives quietly pulled some of the strongest ROAS and lowest CPMs, especially when served in story format.</strong>
                </li>
                <li>
                <strong>Videos with minimal cuts and a healthy amount of negative space outperformed collage-style or heavily edited formats.</strong>
                </li>
            </ul>
            <p>Over time, patterns began to emerge:</p>
            <p>The team hustled to deliver maximum creative volume at launch, and that momentum gave us the early edge we needed to start scaling performance without sacrificing the brand feel.</p>
            </div>
        </div>
        </section>
    ),
    },
    {
    number: "03/",
    title: "Impact",
    content: (
        <p>
        The impact of our work extends beyond immediate results. We measure
        success through tangible outcomes such as increased efficiency,
        improved user experience, and enhanced business performance. Our
        solutions are designed to scale with your growth and adapt to changing
        market conditions, ensuring long-term value and competitive advantage.
        </p>
    ),
    },
];

  const arksHeroData = {
  imageSrc: "/Nivi/Nivi-Hero.webp",
  title: "NIVI",
  sectors: "E-commerce, Consumer",
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
    
      <h3>The Problem</h3>
      <p className="objective">
        Impact-led campaigns operate in a completely different universe compared to e-commerce.
        You're not selling a product. You're asking someone, often in underserved, low-trust, or culturally sensitive environments to start a conversation. That too, about things they've been conditioned not to ask.
      </p>
      <p>
        That means:
      </p>
      <ul>
        <li><strong>The creative communication decides the fate of the campaign.</strong></li>
        <li><strong>And yet, creative fatigue is real - you have to experiment, but always stay within the boundaries of trust, privacy, and clarity.</strong></li>
      </ul>
      <p>
        asknivi's challenge was to create a safe, low-friction entry point for women to ask deeply personal health questions without shame, and without risk.
      </p>
      <h3>The Insight</h3>
      
        <p className='intro'>We realized early on that traditional CTAs like "chat now" wouldn't work.</p>
        <p className='intro'>In many Tier 2 and Tier 3 regions where our audience live, even searching for this information feels risky, let alone clicking on something that is visibly branded around pregnancy, contraception, or sexual health.
          So we reframed the problem: "Don't ask them to start a conversation"
          Give them permission to come back to it.
          That's what led to our first breakthrough.</p>
    </>
  )
  };

  return (
    <div className='nivi-cs-bg'>
    <ArksHero heroData={arksHeroData} />
    <ServiceProvided image={serviceImg}  />
    <AdsCreated images={imageUrls} />
    <FAQs faqs = {faqs} />
    <ImageGrid images={niviImages} />
    </div>
  )
}

export default NiviCaseStudy