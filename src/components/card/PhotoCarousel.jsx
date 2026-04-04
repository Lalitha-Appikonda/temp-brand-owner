import React, { useRef } from "react";
import Buttons from "../form-elements/Buttons";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Images } from "../../images/Image";

const PhotoCarousel = ({ title = "Customer Photos", count = 0, image = [] }) => {
  const scrollRef = useRef();

  // const scrollLeft = () => {
  //   scrollRef.current.scrollBy({
  //     left: -200,
  //     behavior: "smooth",
  //   });
  // };

  // const scrollRight = () => {
  //   scrollRef.current.scrollBy({
  //     left: 200,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="carousel-container">

      <div className="carousel-header">
        <h4>
          {title} ({count})
        </h4>
        <Buttons variant="outline-primary" className="see-all-btn">See All Photo</Buttons>
        
      </div>

      <div className="carousel-wrapper">
        <div>
          <Buttons variant="circle-secondary-mini" className="nav-btn right"  ><img src={Images.rightarrow} /></Buttons>
        </div>
        {/* ref={scrollRef} */}
        <div className="carousel" >
          {image.map((img, index) => (
            <div className="card" key={index}>
              <img src={img} alt="product" />
            </div>
          ))}
        </div>

        <div>
          <Buttons variant="circle-secondary-mini" className="nav-btn left"><img src={Images.leftarrow} /></Buttons>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;