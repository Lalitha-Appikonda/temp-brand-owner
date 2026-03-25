import React from "react";
import { Images } from "../../images/Image";
import Buttons from "../../components/form elements/Buttons";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  const statsData = [
    {
      number: "100+",
      text: "Trusted Dealers partners bringing our probiotic and mineral solutions to every aquaculture hub.",
    },
    {
      number: "50+",
      text: "Corporate Firms collaborating with leading aquaculture companies to enhance sustainability and productivity.",
    },
    {
      number: "2000+",
      text: "Empowering farmers nationwide with natural, science-backed solutions for healthier ponds and higher yields.",
    },
  ];
  return (
    <div className="container">
      <div className="home-page">
        <section className="home-section1">
          <div className="banner-container">
            <div className="banner-title">
              <p> Building Aquaculture </p>
              <img className="icons-img left" src={Images.mainlogotext} />
              <p>Success with</p>
            </div>
            <div className="banner-title">
              <div className="title-imgback">
                <img src={Images.mainlogotext1} alt="right" className="" />
              </div>
              <p> Every Drop of Probiotic Power.</p>
            </div>

            <div className="banner-content">
              <div className="badge">
                <img src={Images.win} />
                <h6>95% Success Ratio</h6>
              </div>
              <div className="main-card"></div>
              <div className="down-position">
                <div className="double-buttons">
                  <Buttons
                    variant="double-primary"
                    className="primary-circle-button"
                  >
                    Shop Now
                  </Buttons>
                  <Buttons variant="circle-primary" className="circle-button">
                    <FiArrowUpRight className="arrow-icon" />
                  </Buttons>
                </div>
              </div>

              <div className="side-cards">
                <div>
                  <div className="small-card1"></div>
                </div>
                <div className="small-card"></div>

                <div>
                  <div className="small-card2"></div>
                </div>
                <div className="small-card3"></div>
              </div>
            </div>
          </div>
          <div className="stats-container">
            {statsData.map((item, index) => (
              <div className="stats-card" key={index}>
                <p className="cards-title">{item.number}</p>
                <p className="subtitle ">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="all-products-container">
          <p>Our Popular Products</p>
          <div className="products-buttons">
            <Buttons variant="outline-primary" className="outline-bg">
              All
            </Buttons>
            <Buttons variant="outline-primary">Probiotics</Buttons>
            <Buttons variant="outline-primary">Minerals</Buttons>
          </div>

          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
