import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import ArksHero from '../Components/ArksHero'
import FAQs from '../Components/FAQs'
import AdsCreated from '../Components/AdsCreated'
import ServiceProvided from '../Components/ServiceProvided'
import serviceImg from '/Arks/Arks-Services.webp';
import '../Styles/CaseStudyPages/ArksCaseStudy.css'
import { Link } from 'react-router-dom'

const ArksCaseStudy = () => {
  const imageUrls = [
    "/Arks/IMAGE_01.png",
    "/Arks/IMAGE_02.png",
    "/Arks/IMAGE_03.png"
  ];

  const processImages = [
    "/Arks/ArksProcess1.webp",
    "/Arks/ArksProcess2.webp",
    "/Arks/ArksProcess3.webp"
  ];

  const arksimages = [
    "/Arks/arks1.webp",
    "/Arks/arks2.webp",
    "/Arks/arks3.webp",
    "/Arks/arks4.webp",
    "/Arks/arks5.webp",
    "/Arks/arks6.png",
    "/Arks/arks7.png",
    "/Arks/arks8.png",
    "/Arks/arks9.webp",
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
              Drive consistent daily revenue and scale profitably while maintaining strong ROAS and preserving the brand’s premium, minimalist tone. The goal was growth without compromising ARKS’ identity.
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
                The strongest results came from product-led visuals with clean, minimal compositions:
              </p>
              <ul>
                <li>
                  <strong>High-contrast creatives</strong> (red-on-white, white-on-red) consistently outperformed.
                </li>
                <li>
                  <strong>Accessories and footwear</strong> delivered the best ROAS and lowest CPMs, especially in story ads.
                </li>
                <li>
                  <strong>Minimal-cut videos with negative space</strong> beat collage-heavy edits.
                </li>
              </ul>
              <p>By doubling down on these formats, we scaled performance without losing brand feel.</p>
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
        <p>Without leaning on heavy offers or celebrity influence, the brand was able to:</p>
        <ul>
          <li><strong>Exceed monthly revenue targets</strong></li>
          <li><strong>Maintain high ROAS across cold and warm audiences</strong></li>
          <li><strong>Identify early category winners for long-term planning</strong></li>
        </ul>
        <Link to="/#contact">
          <button className="cta-button">BOOK DISCOVERY CALL</button>
        </Link>
        </div>
      ),
    },
  ];

  const arksHeroData = {
  imageSrc: "/Arks/Arks-Hero.webp",
  title: "ARKS",
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
        ARKS is a lifestyle brand by Ranbir Kapoor, rooted in minimalism, comfort, and quiet luxury. Their products elevate everyday essentials with clean design and intentional aesthetics. When they came to us, the vision was clear - quiet confidence, premium quality, simplicity done right. What they needed was a performance partner to bring that vision to life, at scale.
      </p>

      <h3>Campaign Strategy</h3>
      <p className="objective">
        The goal: consistent daily revenue with strong ROAS, while staying true to the brand’s tone.
      </p>
      <p>
        We replaced mass campaigns with structured segmentation:
      </p>
      <ul>
        <li>Gender-based targeting</li>
        <li>Product Categories (Shirts, co-ords, pants, etc.)</li>
        <li>Funnel stages (cold, warm, hot audiences)</li>
      </ul>
      <p>
        This approach let us test, learn, and double down on what worked - keeping both creative and performance sharp.
      </p>
    </>
  )
  };


  

  return (
    <div className='arks-cs-bg'>
      <ArksHero heroData={arksHeroData} />
      <ServiceProvided image={serviceImg} />
      <AdsCreated images={imageUrls} />
      <FAQs faqs={faqs} />
      <ImageGrid images={arksimages}/>
    </div>

  );
};

export default ArksCaseStudy;


