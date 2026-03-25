import React from 'react'
import { Images } from '../../images/Image';
import { FiArrowUpRight } from 'react-icons/fi';
import Buttons from '../../components/form elements/Buttons';
import Footer from '../../components/Footer';
import NavBar from "../../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";

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
    {
      id: 1,
      title: "AQUA REMID",
      price: 1200,
      oldPrice: null,
      discount: null,
      badge: "Hot",
      quantity: 3,
      sizes: ["500g", "200g", "1000g", "300g"],
     image: Images.product
    },
    {
      id: 2,
      title: "PROBIZYME",
      price: 1100,
      oldPrice: 2000,
      discount: "45% off",
      badge: "Sale",
      quantity: 1,
      sizes: ["500g", "200g", "1kg"],
       image: Images.product
    },
    {
      id: 3,
      title: "DE - ODOPLUS",
      price: 1700,
      oldPrice: null,
      discount: null,
      badge: null,
      quantity: 1,
      sizes: ["500g", "1kg"],
     image: Images.product
    },
    {
      id: 4,
      title: "UB-SPORE",
      price: 600,
      oldPrice: null,
      discount: null,
      badge: null,
      quantity: 1,
      sizes: ["500g"],
       image: Images.product
    },
    {
      id: 5,
      title: "AQUABISON",
      price: 850,
      oldPrice: null,
      discount: null,
      badge: null,
      quantity: 1,
      sizes: ["1L", "500ml"],
      image: Images.productbox
    },
    {
      id: 6,
      title: "POND CARE",
      price: 1100,
      oldPrice: null,
      discount: null,
      badge: null,
      quantity: 1,
      sizes: ["5L", "1L"],
      image: Images.productbox
    },
    {
      id: 7,
      title: "AQUACARE",
      price: 1080,
      oldPrice: null,
      discount: null,
      badge: null,
      quantity: 1,
      sizes: ["1L"],
       image: Images.productbox
    },
    {
      id: 8,
      title: "VIBRIGO",
      price: 600,
      oldPrice: null,
      discount: null,
      badge: "New",
      quantity: 1,
      sizes: ["500g"],
     image: Images.productbox
    }
  ];



  return (
    <div className="home-page">
      <NavBar/>
      <div className='mobile-container'>
        <div className="container ">

          <section className="home-section1">
            <div className="banner-container">
              <div className="banner-title">
                <p> Building Aquaculture </p>
                <img className="icons-img left" src={Images.mainlogotext} />
                <p>Success with</p>
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
                <p> Every Drop of  Probiotic Power.</p>
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
                  <img className="win-icon" src={Images.win} />
                  <h6>95% Success Ratio</h6>
                </div>


                <div>
                  <img className='mobile-logo' src={Images.mobilelogo1} />
                </div>
                <div className="main-card"></div>
                <div className="down-position">
                  <div className="double-buttons">
                    <Buttons
                      variant="double-primary"
                      className="primary-circle-button  btn-background"
                    >
                      Shop Now
                    </Buttons>
                    <Buttons variant="circle-primary " className="circle-button">
                      <FiArrowUpRight className="arrow-icon" />
                    </Buttons>
                  </div>
                </div>
                <div className="small-card"></div>

                <div>
                  <div className="small-card2"></div>
                </div>
                <div className="small-card3"></div>
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

            <div className="stats-container1">
              {statsDatamobile.map((item, index) => (
                <div className="stats-card" key={index}>
                  <p className="cards-title">{item.number}</p>
                  <p className="subtitle ">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="all-products-container">
            <p className='all-product-text'>Our Popular Products</p>
            <div className="products-buttons">
              <Buttons variant="outline-primary" className="outline-bg all-btn">
                All
              </Buttons>
              <Buttons variant="outline-primary">Probiotics</Buttons>
              <Buttons variant="outline-primary">Minerals</Buttons>
            </div>

            {/* <div className='products-container'> */}



              <div className="products-container">
                {products.map((item) => (
                  <div className="card-context" key={item.id}>
                    <div className="card">
                      <div className='hot-sale'>

                      {item.badge && (
                        <div className={`badge ${item.badge.toLowerCase()}`}>
                          {item.badge}
                        </div>
                      )}

                      <div className="card-image-wrapper">
                        <div className="image-likeback">
                          <img src={Images.like} />
                        </div>
                      </div>
                      </div>

                      <div className="image-container">
                        <div className="rating">
                          <img src={Images.ministar} />
                          <h6>5.0</h6>
                          <img src={Images.minline} />
                          <h6>20K</h6>
                        </div>

                        <img
                          src={item.image}
                          alt="Product"
                          className="product-img"
                        />
                      </div>

                      <h1 className="image-text">{item.title}</h1>

                      <div className="price-section">
                        <h3 className="rupees">₹{item.price}</h3>

                        {item.oldPrice && (
                          <span className="old-price">₹{item.oldPrice}</span>
                        )}

                        {item.discount && (
                          <span className="discount">{item.discount}</span>
                        )}
                      </div>

                      <div className="select-cart">
                        <select>
                          {item.sizes.map((size, i) => (
                            <option key={i}>{size}</option>
                          ))}
                        </select>

                        {item.quantity > 1 ? (
                          <div className="quantity qun-item ">
                            <img src={Images.minusimage}/>
                            <span>{item.quantity}</span>
                            <img src={Images.plusimage}/>
                         
                          </div>
                        ) : (
                          <Buttons>Add to Cart</Buttons>
                        )}
                      </div>
                    </div>

                    <div className="btn-down">
                      <Buttons variant="circle-secondary">
                        <FiArrowUpRight className="arrow-icon" />
                      </Buttons>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        {/* </div> */}
      </div>



      <Footer/>
      {/* <WhyChooseUs/> */}
    </div>
  );
};

export default Home;
