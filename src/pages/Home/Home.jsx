import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Images } from "../../images/Image";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import Buttons from "../../components/form elements/Buttons";
import Card from "../../components/card/Card";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <NavBar />

      <div className="container">
        

        <div className="count-plus-wrapper">
          <div className="count-title">
            <p>100+</p>
            <h6>
              Trusted Dealers partners <span> bringing our probiotic and mineral
              solutions to every aquaculture hub.</span>
            </h6>
          </div>

          <div className="count-title count-title2">
            <p>50+</p>
            <h6>
              Corporate Firms collaborating <span> with leading aquaculture companies
              to enhance sustainability and productivity.</span>
            </h6>
          </div>

          <div className="count-title count-title3">
            <p>2000+</p>
            <h6>
              Empowering farmers <span>nationwide with natural, science-backed
              solutions for healthier ponds and higher yields.</span> 
            </h6>
          </div>
        </div>

        <div className="all-products-container">
          <p>Our Popular Products</p>
          <div className="products-buttons">
            <Buttons variant="outline-primary" className="outline-bg">All</Buttons>
            <Buttons variant="outline-primary">Probiotics</Buttons>
            <Buttons variant="outline-primary">Minerals</Buttons>
          </div>

          <div>
            <Card />
          </div>
        </div>





      </div>

      <Footer />
    </div>
  );
};

export default Home;
