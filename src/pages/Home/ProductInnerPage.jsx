import React, { useState } from 'react'
import { Images } from '../../images/Image'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Buttons from '../../components/form elements/Buttons';
import { useNavigate } from "react-router-dom";
import RatingReview from './../../components/card/RatingReview';
import PhotoCarousel from '../../components/card/PhotoCarousel';
import ReviewCard from '../../components/card/ReviewCard';
import Productreview from '../../components/card/Productreview';
import Card from '../../components/card/Card';

const ProductInnerPage = () => {


    // **********rightcontent
    const navigate = useNavigate();
    const [count, setCount] = useState(3);
    const [activeIndex, setActiveIndex] = useState(null);
    const [like, setlike] = useState(false);
    const [selectedWeight, setSelectedWeight] = useState("");

    const increase = () => setCount(count + 1);

    const decrease = () => {
        if (count > 0) setCount(count - 1);
    };

    const tooglelike = () => {
        setlike(!like)
    }


    const data = [
        {
            title: "Benefits",
            content: [
                "Develops and stabilizes phytoplankton bloom",
                "Effective in a wide range of parameters",
                "Reduces disease outbreak",
                "Maintain and improve water color",
                "Helps in improve survival",
                "Degrade organic waste and remove ammonia."
            ]
        },
        {
            title: "Dosage",
            content: [
                "Develops and stabilizes phytoplankton bloom",
                "Effective in a wide range of parameters",
                "Reduces disease outbreak",
                "Maintain and improve water color",
                "Helps in improve survival",
                "Degrade organic waste and remove ammonia."
            ]
        },
        {
            title: "Mode of Application",
            content: [
                "Develops and stabilizes phytoplankton bloom",
                "Effective in a wide range of parameters",
                "Reduces disease outbreak",
                "Maintain and improve water color",
                "Helps in improve survival",
                "Degrade organic waste and remove ammonia."
            ]
        }
    ];



    // **********leftcontent
    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };


    const images = [
        Images.productlistimage,
        Images.productlistimg2,
        Images.productlistimg3,
        Images.productlistimg4,
        Images.productlistimg5,
        Images.productlistimg6,
    ];

    const [activeIndexs, setActiveIndexs] = useState(0);

    const nextImage = () => {
        if (activeIndexs < images.length - 1) {
            setActiveIndexs(activeIndexs + 1);
        }
    };

    const prevImage = () => {
        if (activeIndexs > 0) {
            setActiveIndexs(activeIndexs - 1);
        }
    };

    const image = [
        Images.rightcurve,
        Images.innerproduct,
        Images.innerproduct,
        Images.innerproduct,
        Images.leftcurve,
    ];


    const reviews = [
        {
            rating: "4.5",
            text: "Product is good",
            images: [Images.reviewproduct, Images.reviewproduct, Images.reviewproduct],
            name: "Shylaja Shankar",
            role: "Certified Dealer,",
            date: "Jan 2024",
            likes: "10",
            dislikes: "2",
            reviewText: "I really liked it. The colour also looks good. The product is really good but the only problem is it is thin. The chance of it getting damage is high but if you use is it a bit carefully then it is good to go."

        },
        {
            rating: "4.5",
            text: "Product is good",
            images: [Images.reviewproduct, Images.reviewproduct, Images.reviewproduct],
            name: "Shylaja Shankar",
            role: "Certified Dealer,",
            date: "Jan 2024",
            likes: "10",
            dislikes: "2",
            reviewText: "I really liked it. The colour also looks good. The product is really good but the only problem is it is thin. The chance of it getting damage is high but if you use is it a bit carefully then it is good to go."

        },
        {
            rating: "4.5",
            text: "Product is good",
            images: [Images.reviewproduct, Images.reviewproduct, Images.reviewproduct],
            name: "Shylaja Shankar",
            role: "Certified Dealer,",
            date: "Jan 2024",
            likes: "10",
            dislikes: "2",
            reviewText: "I really liked it. The colour also looks good. The product is really good but the only problem is it is thin. The chance of it getting damage is high but if you use is it a bit carefully then it is good to go."

        },

    ];

    const products = [
        { id: 1, title: "AQUA REMID", price: 1200, badge: "Hot", image: Images.product, rating: "5.0", reviews: "20K" },
        { id: 2, title: "PROBIZYME", price: 1100, oldPrice: 2000, discount: "45% off", badge: "Sale", image: Images.product, rating: "5.0", reviews: "20K" },
        { id: 3, title: "DE - ODOPLUS", price: 1700, image: Images.product, rating: "5.0", reviews: "20K" },
        { id: 4, title: "UB-SPORE", price: 600, image: Images.product, rating: "5.0", reviews: "20K" },
       
      ];

    return (

        <div className='container' >

            <div className='product-page'>

                <div className='product-inner-page'>
                    <div>

                        {/* webcontainer */}
                        <div className='product-image-container'>
                            <div className='product-image-carousels'>
                                <Buttons onClick={prevImage} variant="circle-secondary-mini" disabled={activeIndexs === 0} className="nav-btn left"><img src={Images.leftarrow} /></Buttons>

                                <Buttons onClick={nextImage} variant="circle-secondary-mini" disabled={activeIndexs === images.length - 1} className="nav-btn right"  ><img src={Images.rightarrow} /></Buttons>
                            </div>
                            <div className="main-image">
                                <img className='main-product-image' src={images[activeIndexs]} alt="product" />

                                <div className="thumbnails">
                                    {images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt=""
                                            className={activeIndexs === index ? "active" : ""}
                                            onClick={() => setActiveIndexs(index)}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* mobileversion */}

                    <div className="card2">
                        <div className="main-image mobile-main-image">
                            <div className='mobile-main-images'>
                                <img className='main-product-image' src={images[activeIndexs]} alt="product" />
                                <div className="rating">
                                    <img src={Images.ministar} />
                                    <h6>5.0</h6>
                                    <img src={Images.minline} />
                                    <h6>20k</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='mobile-buttons'>
                        <div className='mobile-arrow-btns'>
                            <Buttons onClick={prevImage} variant="circle-secondary-mini" disabled={activeIndexs === 0} className="nav-btn left"><img src={Images.leftarrow} /></Buttons>
                            <Buttons onClick={nextImage} variant="circle-secondary-mini" disabled={activeIndexs === images.length - 1} className="nav-btn right"  ><img src={Images.rightarrow} /></Buttons>
                        </div>
                    </div>
                    <div className="thumbnails mobile-thumbnails">
                        <div className='mobile-thumbnails-container'>
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt=""
                                    className={activeIndexs === index ? "active" : ""}
                                    onClick={() => setActiveIndexs(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <p className='product-title'>AquaRemid</p>
                        <div className='product-rating'>
                            <span className='inner-product-rating'>
                                <img src={Images.ministar} />4.4
                            </span>
                            <h6>2,446 Ratings & Review </h6>
                        </div>
                        <div className='product-price'>
                            <span className='rupee-symbol'>₹</span>
                            <span className='product-price-value'>1200</span>
                        </div>
                        <div className='product-weight-container'>
                            <div
                                className={`product-weight ${selectedWeight === "500g" ? "active" : ""}`}
                                onClick={() => setSelectedWeight("500g")}
                            >
                                <h5>500g</h5>
                            </div>

                            <div
                                className={`product-weight ${selectedWeight === "1kg" ? "active" : ""}`}
                                onClick={() => setSelectedWeight("1kg")}
                            >
                                <h5>1kg</h5>
                            </div>
                        </div>
                        <div className="stepper">
                            <button onClick={decrease} className="minus"><FaMinus className="minus-width " /></button>
                            <span className="count">{count}</span>
                            <button onClick={increase} className="minus"><FaPlus className="plus-width" /></button>
                        </div>

                        {/* webbuttons */}

                        <div className='product-action-btns'>
                            <Buttons className='add-to-cart-btn' variant='primary' onClick={() => navigate("/cart")} >
                                Add to Cart  <span className='cart-icon'>
                                    <img src={Images.orangecart} />
                                </span>
                            </Buttons>
                            <Buttons className='add-to-wishlist-btn' variant='outline-primary'>
                                Add to Wishlist <span className='heart-icon'>
                                    <img src={Images.cartheart} onClick={tooglelike} className={like ? "heart active" : "heart"} />
                                </span>
                            </Buttons>

                        </div>


                        {/* mobilebuttons */}

                        <div className=' mobile-product-action-btns'>
                            <div className='mobile-product-action-btns-container'>
                                <span className='buy-icon'>
                                    <img src={Images.mobilelike} />
                                </span>

                                <Buttons className='add-to-wishlist-btn' variant='outline-primary'>
                                    Buy Now <span className='buy-icon'>
                                        <img src={Images.buynow} />
                                    </span>
                                </Buttons>
                                <Buttons className='add-to-cart-btn' variant='primary' onClick={() => navigate("/cart")} >
                                    Add to Cart  <span className='cart-icon'>
                                        <img src={Images.orangecart} />
                                    </span>
                                </Buttons>
                            </div>
                        </div>

                        <h5 className='product-description-title'>SOIL & WATER PROBIOTIC</h5>
                        <ul>
                            <li className='product-description-text'>Unique blend of scientifically proven, non-pathogenic probiotic strains of Bacillus species,
                                Lactobacillus
                                species, Aspergillus & Saccharomyces species.
                            </li>
                        </ul>

                        <div className="accordion">
                            {data.map((item, index) => (
                                <div className="benefits-box" key={index}>

                                    <div className="header" onClick={() => toggle(index)}>
                                        <h2>{item.title}</h2>
                                        <span className="close-btn">
                                            <img
                                                src={activeIndex === index ? Images.cross : Images.plus}
                                                alt="icon"
                                            />
                                        </span>
                                    </div>

                                    {activeIndex === index && (
                                        <ul className="benefits-list">
                                            {item.content.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    )}

                                </div>
                            ))}
                        </div>

                    </div>



                </div>

                <div className='product-reviewrating-container'>
                    <div>
                        <div className='line-review'><RatingReview /></div>
                        <div className="dividing-line "></div>
                        <div>
                            <Productreview />
                        </div>
                    </div>

                    <div className='product-review-right'>
                        <div className='customer-photo-carousel'>
                            <PhotoCarousel
                                title="Customer Photos"
                                count={500}
                                image={image}
                            />
                        </div>
                        <div className="dividing-line "></div>

                        <div>
                            {reviews.map((item, index) => (
                                <ReviewCard
                                    key={index}
                                    rating={item.rating}
                                    reviewText={item.reviewText}
                                    text={item.text}
                                    images={item.images}
                                    userName={item.name}
                                    role={item.role}
                                    date={item.date}
                                    likes={item.likes}
                                    dislikes={item.dislikes}
                                />
                            ))}
                        </div>

                        <div className="dividing-line "></div>
                        <span className='dividing-see-all-reviews'>See All Reviews<img src={Images.orangearrow} /></span>
                        <div className="dividing-line "></div>

                    </div>
                </div>

                <div  className='product-bottom-section'>
                    <div className='product-popular-products-container'>

                        <p className='product-section-title'>Our Popular Products</p>
                        <div className='product-blue-arrow'>
                            <Buttons variant="circle-secondary-miniwhite"><img src={Images.blueleft} /></Buttons>
                            <Buttons variant="circle-secondary-miniwhite"><img src={Images.blueright} /></Buttons>

                        </div>
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
                </div>

            </div>

        </div>
    )
}

export default ProductInnerPage