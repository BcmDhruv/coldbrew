import React, { useState } from 'react';
import '../Styles/FAQs.css';

const faqData = [
  {
    number: '01/',
    title: 'Objective',
    content: 'Our objective is to design with purpose and clarity, making brands stand out in a crowded market.'
  },
  {
    number: '02/',
    title: 'Process',
    content: (
      <div className="faq-process">
        <p>Every creative we made followed three core principles:</p>
        <div className="process-grid">
          <div className="process-card">
            <div className="card-image image1" />
            <p><strong>Show the product clearly</strong> – focusing on fabric, fall, and fit.</p>
          </div>
          <div className="process-card">
            <div className="card-image image2" />
            <p><strong>Avoid the noise</strong> – no salesy headline, no loud visuals.</p>
          </div>
          <div className="process-card">
            <div className="card-image image3" />
            <p><strong>Build the lifestyle</strong> – quiet, stylish, rooted in a premium state of mind. <a href="#">Get in touch</a></p>
          </div>
        </div>
        <p>We didn’t rely on Ranbir’s face to carry the narrative but relied on visuals that built brand memory and product trust on their own. In fact, while RK-led creatives performed well, some of our highest ROAS came from product-led assets with clean, minimal compositions.</p>
        <p>Over time, patterns began to emerge:</p>
        <ul>
          <li>Creatives with strong contrast between foreground and background (like red-on-white or white-on-red) consistently led in performance.</li>
          <li>Accessories and footwear creatives quietly pulled some of the strongest ROAS and lowest CPMs, especially when served in story format.</li>
          <li>Videos with minimal cuts and a healthy amount of negative space outperformed collage-style or heavily edited formats.</li>
        </ul>
        <p>The team hustled to deliver maximum creative volume at launch, and that momentum gave us the early edge we needed to start scaling performance without sacrificing the brand feel.</p>
      </div>
    )
  },
  {
    number: '03/',
    title: 'Impact',
    content: 'Our work has created measurable improvements in user engagement and brand perception.'
  }
];


const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-header" onClick={() => toggleFAQ(index)}>
            <span className="faq-number">{faq.number}</span>
            <h3 className="faq-title">{faq.title}</h3>
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-content ${activeIndex === index ? 'open' : ''}`}>
            <p>{faq.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQs;
