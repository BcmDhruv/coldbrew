// import React from 'react'
// import '../Styles/FAQs.css'

// const FAQs = ({ images = [] }) => {
//   return (
    // <section className="process-accordian">
    //   <div className="process-wrapper">
    //     <p>
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quo unde, possimus, nobis esse voluptate aut sunt reiciendis veniam aperiam eius fugiat repudiandae odit dolore! Nemo, quibusdam pariatur? Libero, repellendus?
    //     </p>
    //     <div className="process-images">
    //         {images.map((img, index) => (
    //           <div key={index} className="process-card">
    //             <div className="process-card-inner">
    //               <img src={img} alt={`process-Card ${index + 1}`} />
    //             </div>
    //           </div>
    //         ))}
    //     </div>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quidem cupiditate repellendus recusandae dolore aspernatur quasi molestiae quo officiis, nobis iste quos? Ratione ducimus sed amet ad! Ad ea autem sequi dicta facilis doloremque vitae aut, veritatis soluta quam, aliquam repellendus tenetur quis nam temporibus? Eligendi hic velit magnam architecto quas, culpa atque soluta reiciendis obcaecati maxime similique facere recusandae ullam ipsam iure consequatur rem vitae fugit perspiciatis cum? Odit nihil illo, ut aliquam tempore, alias quasi molestiae assumenda omnis explicabo soluta saepe odio labore repellat quae doloremque unde cumque qui tenetur eos. Laboriosam quae consequuntur dolore consequatur corporis!
    //     </p>
    //   </div>
    // </section>
//   )
// }

// export default FAQs

import React, { useState } from "react";
import '../Styles/FAQs.css'


const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const processImages = [
    "/Arks/IMAGE_01.png",
    "/Arks/IMAGE_02.png",
    "/Arks/IMAGE_03.png"
    // add more image URLs here
  ];

  const faqs = [
    {
      number: "01/",
      title: "Objective",
      content: (
        <p>
          Our primary objective is to deliver innovative solutions that drive
          meaningful impact and create lasting value for our clients. We focus
          on understanding your unique challenges and developing strategies that
          align with your business goals while maintaining the highest standards
          of quality and excellence.
        </p>
      ),
    },
    {
      number: "02/",
      title: "Process",
      content: (
        <section className="process-accordian">
          <div className="process-wrapper">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quo unde, possimus, nobis esse voluptate aut sunt reiciendis
              veniam aperiam eius fugiat repudiandae odit dolore! Nemo,
              quibusdam pariatur? Libero, repellendus?
            </p>
            <div className="process-images">
              {processImages.map((img, index) => (
                <div key={index} className="process-card">
                  <div className="process-card-inner">
                    <img src={img} alt={`process-card-${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              nesciunt quidem cupiditate repellendus recusandae dolore aspernatur
              quasi molestiae quo officiis, nobis iste quos? Ratione ducimus sed
              amet ad! Ad ea autem sequi dicta facilis doloremque vitae aut,
              veritatis soluta quam, aliquam repellendus tenetur quis nam
              temporibus? Eligendi hic velit magnam architecto quas, culpa atque
              soluta reiciendis obcaecati maxime similique facere recusandae
              ullam ipsam iure consequatur rem vitae fugit perspiciatis cum? Odit
              nihil illo, ut aliquam tempore, alias quasi molestiae assumenda
              omnis explicabo soluta saepe odio labore repellat quae doloremque
              unde cumque qui tenetur eos. Laboriosam quae consequuntur dolore
              consequatur corporis!
            </p>
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
    <section className="faq-section">
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-header" onClick={() => toggleFaq(index)}>
              <div>
                <div className="faq-number">{faq.number}</div>
                <h3 className="faq-title">{faq.title}</h3>
              </div>
              <div className="faq-icon"></div>
            </div>
            <div className="faq-content">
              <div className="faq-content-inner">{faq.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;