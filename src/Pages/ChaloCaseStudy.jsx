import React from 'react'
import ServiceProvided from '../Components/ServiceProvided';
import serviceImg from '/Chalo/Chalo-Services.png';
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
            <div className='impact-wrappper'>
                <p>Our work helped Chalo:</p>
                    <ul>
                    <li><strong>Drive thousands of first-ride pass activations through targeted city-level campaigns</strong></li>
                    <li><strong>Improve funnel performance by focusing on real-user behavior and deep conversion events.</strong></li>
                    <li><strong>Build a creative system that speaks to both the commuter's mood and mind.</strong></li>
                    <li><strong>Establish Chalo not just as a functional option but as a lifestyle upgrade for daily office goers.</strong></li>
                    </ul>
                <p>If your mobility brand that stands for something more, we can help you tell that story and drive momentum and revenue to your brand.</p>
                <p>Let's talk.</p>
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
        <p className="intro">
            <p>Chalo is a subscription-based commute service for working professionals in Mumbai. It sits in the sweet spot between the chaos of local trains and the high cost of cabs and offers express routes, guaranteed seats, and a lot of convenience at a fraction of what ride-sharing services cost.</p>
            <p>But building a mobility brand isn’t just about showing routes or pricing. It’s about showing people a better feeling - the relief of knowing you’ll always get a seat, the comfort of skipping traffic, and the quiet joy of reaching work without stress.</p>
        </p>

        <h3>Campaign Strategy</h3>
        <p className="objective">
            The goal was to drive first-time ride coversions by getting users to explore Chalo's subscription model through promotional passes.
        </p>
        <p>
            To make that happen, we built a performance engine that was:
        </p>
        <ul>
            <li><strong>Hyperlocal:</strong> Every campaign was tightly geo-targeted within Mumbai</li>
            <li><strong>Funnel-Smart:</strong>We optimised for deeper funnel events like pass views and redemptions.</li>
            <li><strong>Cross-Platform:</strong>Ran app installs and re-engagement campaigns across Google and Mets</li>
        </ul>
        <p>
            We were actively trying to sell a better way to get to work and our funnel was built to reflect that.
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









