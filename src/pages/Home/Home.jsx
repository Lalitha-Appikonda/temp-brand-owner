import React, { useEffect, useState } from 'react'
import { Images } from '../../images/Image';
import { FiArrowUpRight } from 'react-icons/fi';
import Buttons from '../../components/form-elements/Buttons';
import Footer from '../../components/footer/Footer';
import NavBar from "../../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import Card from '../../components/card/Card';
import Styleguide from '../../Styleguide/Styleguide';
import Input from '../../components/form-elements/Input';
import PhotoCarousel from '../../components/card/PhotoCarousel';

const Home = () => {
  const navigate = useNavigate();
  const [like, setLike] = useState({});

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

  const statsDatamobile = [
    {
      number: "100+",
      text: "Trusted Dealers partners ",
    },
    {
      number: "50+",
      text: "Corporate Firms collaborating ",
    },
    {
      number: "2000+",
      text: "Empowering farmers ",
    },
  ];

  const products = [
    { id: 1, title: "AQUA REMID", price: 1200, badge: "Hot", image: Images.product, rating: "5.0", reviews: "20K" },
    { id: 2, title: "PROBIZYME", price: 1100, oldPrice: 2000, discount: "45% off", badge: "Sale", image: Images.product, rating: "5.0", reviews: "20K" },
    { id: 3, title: "DE - ODOPLUS", price: 1700, image: Images.product, rating: "5.0", reviews: "20K" },
    { id: 4, title: "UB-SPORE", price: 600, image: Images.product, rating: "5.0", reviews: "20K" },
    { id: 5, title: "AQUABISON", price: 850, image: Images.productbox, rating: "5.0", reviews: "20K" },
    { id: 6, title: "POND CARE", price: 1100, image: Images.productbox, rating: "5.0", reviews: "20K" },
    { id: 7, title: "AQUACARE", price: 1080, image: Images.productbox, rating: "5.0", reviews: "20K" },
    { id: 8, title: "VIBRIGO", price: 600, badge: "New", image: Images.productbox },
  ];

  const productsmobile = [
    { id: 1, title: "AQUA REMID", price: 1200, badge: "Hot", image: Images.product, rating: "5.0", reviews: "20K" },
    { id: 2, title: "PROBIZYME", price: 1100, oldPrice: 2000, discount: "45% off", badge: "Sale", image: Images.product, rating: "5.0", reviews: "20K" },
    { id: 1, title: "AQUA REMID", price: 1200, image: Images.product, rating: "5.0", reviews: "20K" },
    { id: 1, title: "AQUA REMID", price: 1200, image: Images.product, rating: "5.0", reviews: "20K" },

  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const [activeTab, setActiveTab] = useState("All");

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

  const toggle1 = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // promotioncard images


  const slides = [
    { id: 1, img: Images.promtioncard },
    { id: 2, img: Images.promtioncard },
    { id: 3, img: Images.promtioncard },
    { id: 4, img: Images.promtioncard },
    { id: 5, img: Images.promtioncard },
    { id: 6, img: Images.promtioncard },
  ];

  // const mobileslide=[
  //    { id: 1, img: Images.promtioncard },
  //   { id: 2, img: Images.promtioncard },
  //   { id: 3, img: Images.promtioncard },
  //   { id: 4, img: Images.promtioncard },
  //   { id: 5, img: Images.promtioncard },
  //   { id: 6, img: Images.promtioncard },
  // ]

  // Current Slide State
  const [current, setCurrent] = useState(0);

  //  Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);


  // WHY CHOOSE IMAGES
  const whyImages = [
    { id: 1, img: Images.whychooseimage },
    { id: 2, img: Images.whychooseimage },
    { id: 3, img: Images.whychooseimage },
    { id: 4, img: Images.whychooseimage },
    { id: 5, img: Images.whychooseimage },
    { id: 6, img: Images.whychooseimage },
  ];

  // CURRENT INDEX
  const [whyCurrent, setWhyCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setWhyCurrent((prev) => (prev + 1) % whyImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


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

            <div className='mobile-version-title'>
              <div className='first-line'>
                <p> Building Aquaculture </p>
                <img className="mobile-none1" src={Images.mainlogotext} />
              </div>

              <p className='second-line'>Success with Every Drop of </p>
              <div className='third-line'>
                <div className="title-imgback1" >
                  <img src={Images.mainlogotext1} alt="right" className=" mobile-none" />
                </div>

                <p>Probiotic Power</p>

              </div>

            </div>

            <div className="banner-content">
              <div className="badge">
                <img src={Images.win} />
                <h6>95% Success Ratio</h6>
              </div>

              {/* web branner */}

              <div className="main-card">
                {/* <img src={Images.brannerswed}/> */}
              </div>

              {/* mobile branner */}
              <div className='card-mobile-logo'>
                {/* <img src={Images.mobilelogo1} /> */}
              </div>

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
                <div className="small-card">
                  <img src={Images.brannerslide1} />
                </div>

                <div>
                  <div className="small-card2"></div>
                </div>
                <div className="small-card3">
                  <img src={Images.brannerslide2} />
                </div>
              </div>
            </div>
          </div>

          <div className="stats-container">
            {statsData.map((item, index) => (
              <div className="stats-card" _key_={index}>
                <p className="cards-title">{item.number}</p>
                <p className="subtitle ">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="stats-container1">
            {statsDatamobile.map((item, index) => (
              <div className="stats-card" key={index}>
                <p className="cards-title">{item.number}</p>
                <p className="subtitle ">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        {/*innersection2  */}
        <div className="all-products-container">
          <h1 className='all-product-text'>Our Popular Products</h1>
          <div className="products-buttons">
            <Buttons
              variant="outline-primary"
              className={`tab-btn  all-btn  ${activeTab === "All" ? "active" : ""}`}
              onClick={() => setActiveTab("All")}
            >
              All
            </Buttons>

            <Buttons variant="outline-primary" className={`tab-btn ${activeTab === "Probiotics" ? "active" : ""}`} onClick={() => setActiveTab("Probiotics")}> Probiotics</Buttons>

            <Buttons
              variant="outline-primary"
              className={`tab-btn ${activeTab === "Minerals" ? "active" : ""}`}
              onClick={() => setActiveTab("Minerals")}
            >
              Minerals
            </Buttons>
          </div> 
          <div className="products-container">
            {products.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                oldPrice={item.oldPrice}
                discount={item.discount}
                badge={item.badge}
                image={item.image}
                rating={item.rating}
                reviews={item.reviews}
              />
            ))}
          </div>
          <div className="products-container1">
            <div className="products-container12">
              {productsmobile.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  discount={item.discount}
                  badge={item.badge}
                  image={item.image}
                  rating={item.rating}
                  reviews={item.reviews}
                />
              ))}
            </div>
          </div>
          <div className='view-all-product'>
            <Buttons variant='outline-primary' className="outline-bg" >View All</Buttons>
          </div>
        </div>
        <div>
          {/*innersection3  */}
          <div className="why-container">
            <div className='mobile-whychoose'>
              <div className='mobile-center'>
                <p className='title'>Why Choose Us</p >
                <h6 className="subtitle">
                  Our probiotics are designed to enhance pond health, improve growth,
                  and promote sustainable aquaculture.
                </h6>
                <h6 className="mobile-sub">
                  Our probiotics are designed to enhance pond health, improve growth, and promote  sustainable aquaculture —  trusted by dealers, corporates, and farmers nationwide.
                </h6>
              </div>
            </div>

            <div className="left-section">

              {/*  Carousel */}
              <div className="why-carousel">
                {whyImages.map((item, index) => (
                  <div
                    key={item.id}
                    className={`image-box ${index === whyCurrent ? "active" : ""}`}
                  >
                    <img src={item.img} alt="product" />

                    {/* play button */}
                    <div className="play-border">
                      <img className="play-btn" src={Images.play} />
                    </div>
                  </div>
                ))}
              </div>

              {/*  Dots */}
              <div className="dots">
                {whyImages.map((_, index) => (
                  <span
                    key={index}
                    className={whyCurrent === index ? "active" : ""}
                    onClick={() => setWhyCurrent(index)}
                  ></span>
                ))}
              </div>

            </div>

            <div className="right-section">
              <h1 className='title'>Why Choose Us</h1 >
              <h6 className="subtitle">
                Our probiotics are designed to enhance pond health, improve growth,
                and promote sustainable aquaculture.
              </h6>

              <div className="accordion">
                {data.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <div
                      className="accordion-title"
                      onClick={() => toggle1(index)}>
                      <h4>{item.title}</h4>
                      <span className="cross-plus-icons">
                        <img
                          src={activeIndex === index ? Images.cross : Images.plus}
                          alt="icon"
                        />
                      </span>
                    </div>

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


          {/*innersection4  */}


          <section className="promotion-section">
            <div>

              <div className="promotion-wrapper">

                {/*  Button */}
                <div className="promotion-button">
                  <div className="double-dotted-buttons">

                    <div className="double-buttons">
                      <Buttons variant="double-primary" className="primary-circle-button">
                        View All Offers
                        <span className="circle-button btn-circle-primary">
                          <FiArrowUpRight />
                        </span>
                      </Buttons>
                    </div>

                    <div className="mobile-button">
                      <Buttons variant="circle-secondary">
                        <FiArrowUpRight className="arrow-icon" />
                      </Buttons>
                    </div>

                  </div>
                </div>

                {/*  Carousel */}
                <div className="carousel-wrapper">
                  {slides.map((item, index) => (
                    <div
                      key={item.id}
                      className={`promtion-card   ${index === current ? "active" : ""}`}
                    >
                      <img className='promote-mobile' src={item.img} alt="promotion" />
                    </div>
                  ))}
                </div>

                <div className='promtion-card1'>
                  <img src={Images.mobilepromtioncard} />
                </div>

              </div>

              {/*  Dots */}
              <div className="dots">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={current === index ? "active" : ""}
                    onClick={() => setCurrent(index)}
                  ></span>
                ))}
              </div>

            </div>
          </section>



          <section className='reference-program'>
            <p className='title1'>Join Our Referral Program!</p>
            <h5 className='subtitle1'>Invite Dealers and Corporate farmers to join Unique Biotech’s online store and earn exclusive cashback on every referral.</h5>
            <div className='whats-box'>
              <div className='whatsapp-box'>
                <img src={Images.mail} />
              </div>
              <div className='whatsapp-box'>
                <img src={Images.whatsapp} />
              </div>
            </div>
            <div className='whats-wrapper'>
              <div className="whats-input-wrapper">
                <Input placeholder='Enter refer member mail' />
              </div>
              <div>
                <div className='button-in-button'>
                  <div className="double-buttons">
                    <Buttons variant="double-primary" className="primary-circle-button">
                      Send Link <span className="circle-button btn-circle-primary"><FiArrowUpRight /></span>
                    </Buttons>
                  </div>


                </div>

                <div className='reference-mobile'>
                  <Buttons variant="circle-secondary">
                    <FiArrowUpRight className="arrow-icon" />
                  </Buttons>
                </div>
              </div>
            </div>

          </section>          
        </div>
      </div>
    </div>

  );
};

export default Home;
