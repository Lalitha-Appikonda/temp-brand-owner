import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Images } from '../../images/Image';
import { FiArrowUpRight } from 'react-icons/fi';
import Buttons from '../../components/form elements/Buttons';
import Footer from '../../components/Footer';
import WhyChooseUs from './WhyChooseUs';

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
    <div className='home-page'>
      <section className='home-section1'>
        <div className='container'>
          <div className="banner-container">

            <div className="banner-title">
              <p> Building Aquaculture </p>
              <img className="icons-img left" src={Images.mainlogotext} />
              <p>Success with</p>
            </div>
            <div className='banner-title'>
              <div className='title-imgback'><img
                src={Images.mainlogotext1}
                alt="right"
                className=""
              /></div>
              <p> Every Drop of Probiotic Power.</p>
            </div>

            <div className="banner-content">
              <div className='badge'>
                <img src={Images.win} />
                <h6>95% Success Ratio</h6>
              </div>
              <div className="main-card">
              </div>
              {/* <div className="main-card1">
              </div> */}
              <div className='down-position'>
                <div className="double-buttons">
                  <Buttons variant="double-primary" className="primary-circle-button">
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

        </div>
        <div className="stats-container">
          {statsData.map((item, index) => (
            <div className="stats-card" key={index}>
              <p className='cards-title'>{item.number}</p>
              <p className='subtitle '>{item.text}</p>
            </div>
          ))}
        </div>



      </section>



      <section>
        
      </section>




      {/* <h2>home page</h2>
      <button onClick={()=>navigate("/products")}>products list</button> */}
      <Footer />
      <WhyChooseUs/>
    </div>
  )
}

export default Home;
