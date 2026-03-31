import React, { useEffect, useState } from "react";
import { Images } from "../../images/Image";
import Buttons from "../../components/form-elements/Buttons";

const WelcomePage = () => {
  const welcomeScreens = [
    { id: 1, img: Images.whychooseimage },
    { id: 2, img: Images.whychooseimage },
    { id: 3, img: Images.whychooseimage },
  ];

  const [welcome, setWelcome] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setWelcome((prev) => (prev + 1) % welcomeScreens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [welcomeScreens.length]);

  return (
    <div className="welcome-container">
      <div  className="welcome-carousel"  style={{  transform: `translateX(-${welcome * 100}%)`, }} >
        {welcomeScreens.map((item) => (
          <div key={item.id} className="image-block">
            <img src={item.img} alt="product" />
          </div>
        ))}
      </div>

      <div className="dots">
        {welcomeScreens.map((_, index) => (
          <span key={index}  className={welcome === index ? "active" : ""} onClick={() => setWelcome(index)}></span>
        ))}
      </div>

      <div className="welcome-content">
        <h1>Growing Health, Feeding Futures.Powering farms with science and trust.</h1>
        <p>Delivering quality nutrition and care for stronger animals, better farms, and a healthier tomorrow.</p>
        <div  className="get-start-button-container">
            <Buttons variant="primary">Get Started</Buttons>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;