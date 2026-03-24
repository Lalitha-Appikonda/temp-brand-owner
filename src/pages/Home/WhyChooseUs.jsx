import React, { useState } from "react";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "Natural & Safe",
      content:
        "Our probiotics are designed to enhance pond health and promote sustainable aquaculture.",
    },
    {
      title: "Improves Water & Gut Health",
      content:
        "Balances pond ecology and supports strong digestive health in shrimp and fish.",
    },
    {
      title: "Boosts Growth & Feed Efficiency",
      content:
        "Improves nutrient absorption and increases growth performance.",
    },
    {
      title: "Prevents Disease Naturally",
      content:
        "Strengthens immunity and reduces harmful bacteria in aquaculture systems.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="why-container">
      {/* LEFT SECTION */}
      <div className="left-section">
        <div className="image-box">
          <img
            src="https://via.placeholder.com/250x300"
            alt="product"
          />
          <div className="play-btn">▶</div>
        </div>

        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
        <h2>Why Choose Us</h2>
        <p className="subtitle">
          Our probiotics are designed to enhance pond health, improve growth,
          and promote sustainable aquaculture.
        </p>

        <div className="accordion">
          {data.map((item, index) => (
            <div className="accordion-item" key={index}>
              
              {/* TITLE */}
              <div
                className="accordion-title"
                onClick={() => toggle(index)}
              >
                <h4>{item.title}</h4>
                <span>{activeIndex === index ? "×" : "+"}</span>
              </div>

              {/* ✅ CONTENT (NO SHAKE) */}
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;