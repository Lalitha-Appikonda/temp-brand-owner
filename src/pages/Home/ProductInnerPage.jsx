import React, { useState } from 'react'
import { Images } from '../../images/Image'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Buttons from '../../components/form elements/Buttons';
import { useNavigate } from "react-router-dom";

const ProductInnerPage = () => {


    // **********rightcontent
    const navigate = useNavigate();
    const [count, setCount] = useState(3);
    const [activeIndex, setActiveIndex] = useState(null);
    const [like, setlike] = useState(false);

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

    return (

        <div className='container' >

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
                        <div className='product-weight'>
                            <h5>500g</h5>
                        </div>
                        <div className='product-weight'>
                            <h5>1kg</h5>
                        </div>
                    </div>
                    <div className="stepper">
                        <button onClick={decrease} className="minus"><FaMinus className="minus-width " /></button>
                        <span className="count">{count}</span>
                        <button onClick={increase} className="minus"><FaPlus className="plus-width" /></button>
                    </div>

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

        </div>
    )
}

export default ProductInnerPage