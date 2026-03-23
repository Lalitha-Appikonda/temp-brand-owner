import React from "react";
import { Images } from "../images/Image";
import Card from "./card/Card";

const Footer = () => {
    const images = [
        { icon: Images.insta },
        { icon: Images.facebook },
        { icon: Images.tiwter },
        { icon: Images.youtube },
    ];

    return (
        <footer className="footer-container">
            <div className="container">

                <div className="footer-wrapper">


                    <div className="footer-left">
                        <img src={Images.footlogo} alt="logo" />
                        <h6>
                            Sri Animalife, through its brand Unique Bio Minerals, provides
                            innovative aquaculture probiotics and natural minerals that
                            enhance water quality and promote healthy, sustainable growth
                            in fish and shrimp.
                        </h6>
                        <div className="dividied-line mobile-line"></div>
                    </div>


                    <div className="footer-right">
                        <img src={Images.ubm} alt="ubm" />
                        <h4>A Natural & Pure Mineral Product</h4>
                        <h6>
                            Potassium and Magnesium are essential for fish, shrimp, and phytoplankton.
                            Unique Bio-Minerals replenishes these minerals in low-alkalinity ponds,
                            ensuring healthy growth and higher yields.
                            Unique Bio Minerals, derived from seawater, is a rich, eco-friendly source
                            of 100% bioavailable minerals that nourish aquatic animals,enhance
                            absorption, and promote healthy growth.
                        </h6>
                    </div>
                </div>
                <div className="dividied-line"></div>
                <div className="footer-bottom">
                    <p>© 2025 Sri Animalife Biotech Pvt Ltd. All Rights Reserved</p>

                    <div className="social">
                        <span>Follow Us :</span>
                        <div className="icons">

                            {images.map((img, index) => (
                                <div className="icons-border">
                                    <img key={index} src={img.icon} alt="icon" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;