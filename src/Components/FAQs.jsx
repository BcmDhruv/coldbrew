import { useState } from "react";
import '../Styles/FAQs.css';


const FAQs = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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



