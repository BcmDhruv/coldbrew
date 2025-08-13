import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import ArksHero from '../Components/ArksHero'
import FAQs from '../Components/FAQs'
import AdsCreated from '../Components/AdsCreated'
import ServiceProvided from '../Components/ServiceProvided'
import serviceImg from '/Arks/Arks-Services.png';
import '../Styles/CaseStudyPages/ArksCaseStudy.css'

const ArksCaseStudy = () => {
  const imageUrls = [
    "/Arks/IMAGE_01.png",
    "/Arks/IMAGE_02.png",
    "/Arks/IMAGE_03.png"
  ];

  const processImages = [
    "/Arks/ArksProcess1.png",
    "/Arks/ArksProcess2.png",
    "/Arks/ArksProcess3.png"
  ];

  const arksimages = [
    "/Arks/arks1.png",
    "/Arks/arks2.png",
    "/Arks/arks3.png",
    "/Arks/arks4.png",
    "/Arks/arks5.png",
    "/Arks/arks6.png",
    "/Arks/arks7.png",
    "/Arks/arks8.png",
    "/Arks/arks1.png",
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
  imageSrc: "/Arks/redcap.png",
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
        ARKS is a lifestyle clothing brand owned by Ranbir Kapoor and it's built around the principles of minimalism, comfort, and quiet luxury. Every product in the lineup is made to elevate everyday essentials through clean design and a calm, intentional aesthetic.
        When the team first approached us, they had clarity on what the brand stood for - quiet confidence, premium quality, and simplicity done right. What they needed was a creative and performance partner who could bring that vision to life, at scale.
        When we pitched our approach, the ARKS team was aligned from the first presentation.
        But winning the pitch was just the beginning.
      </p>

      <h3>Campaign Strategy</h3>
      <p className="objective">
        The objective was clear: drive consistent daily revenue while maintaining a strong ROAS without diluting the brand's tone.
      </p>
      <p>
        Instead of mass campaigns, we focused on structured segmentation that let us scale with clarity.
      </p>
      <ul>
        <li>Gender-based targeting</li>
        <li>Product Categories (Shirts, co-ords, pants, etc.)</li>
        <li>Funnel stages (cold, warm, hot audiences)</li>
      </ul>
      <p>
        This structure helped us test, learn, and double down on what worked across both creative and audience behavior while keeping the performance engine lean and sharp.
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


