import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import ArksHero from '../Components/ArksHero'
import FAQs from '../Components/FAQs'
import AdsCreated from '../Components/AdsCreated'
import ServiceProvided from '../Components/ServiceProvided'
import serviceImg from '/Arks/Arks-Services.png';

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

  

  return (
    <>
      <ArksHero />
      <ServiceProvided image={serviceImg} />
      <AdsCreated images={imageUrls} />
      <FAQs faqs={faqs} />
      <ImageGrid />
    </>

  );
};

export default ArksCaseStudy;