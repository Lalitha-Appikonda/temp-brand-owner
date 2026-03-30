import React, { useRef } from "react";

const PhotoCarousel = ({ title = "Customer Photos", count = 0, images = [] }) => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-container">
      
      {/* Header */}
      <div className="carousel-header">
        <h3>
          {title} ({count})
        </h3>
        <button className="see-all-btn">See All Photo</button>
      </div>

      {/* Slider */}
      <div className="carousel-wrapper">
        
        <button className="nav-btn left" onClick={scrollLeft}>
          ←
        </button>

        <div className="carousel" ref={scrollRef}>
          {images.map((img, index) => (
            <div className="card" key={index}>
              <img src={img} alt="product" />
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>
          →
        </button>

      </div>
    </div>
  );
};

export default PhotoCarousel;