import React from 'react'
import ImageGrid from '../Components/ImageGrid'
import FAQs from '../Components/FAQs';
import serviceImg from '/Yangpoo/Yangpoo-Services.webp'
import ServiceProvided from '../Components/ServiceProvided';
import AdsCreated from '../Components/AdsCreated';
import '../Styles/CaseStudyPages/YangpooCaseStudy.css'
import { Link } from 'react-router-dom';

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
    

  return (
    
    <div className='yp-cs-bg'>
    <ServiceProvided image={serviceImg} />
    <AdsCreated images = {imageUrls} />
    <FAQs faqs={faqs} />
    <ImageGrid images={YangpooImg} />
    </div>
  )
}

export default YangpooCaseStudy