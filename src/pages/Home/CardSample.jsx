import React from 'react'
import ReviewCard from '../../components/card/ReviewCard';
import PhotoCarousel from '../../components/card/PhotoCarousel';
import { Images } from '../../images/Image';
import RatingReview from '../../components/card/RatingReview';
import Styleguide from './../../Styleguide/Styleguide';
import Productreview from '../../components/card/Productreview';

  const reviews = [
    {
      rating: "4.5",
      text: "Product is good",
      images: [Images.reviewproduct,Images.reviewproduct,Images.reviewproduct],
      name: "Shylaja Shankar",
      role: "Certified Dealer,",
      date: "Jan 2024",
      likes: "10",
      dislikes: "2",
             reviewText:"I really liked it. The colour also looks good. The product is really good but the only problem is it is thin. The chance of it getting damage is high but if you use is it a bit carefully then it is good to go."

    },
    {
      rating: "7.0",
      text: "Nice quality",
      images: [Images.reviewproduct,Images.reviewproduct,Images.reviewproduct],
      name: "Ravi",
      role: "Certified Dealer,",
      date: "Feb 2024",
      likes: "5",
      comments: "1",
       reviewText:"I really liked it. The colour also looks good. The product is really good but the only problem is it is thin. The chance of it getting damage is high but if you use is it a bit carefully then it is good to go."
    },
   
  ];
const images = [
  Images.rightcurve,
  Images.innerproduct,
  Images.innerproduct,
  Images.innerproduct,
  Images.leftcurve,
];
const CardSample = () => {
  return (
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

      {/* <div>
        <Productreview/>
      </div> */}

    <div style={{padding:"50px "}}>
        <RatingReview/>
    </div>


    <div style={{marginBottom:"300px"}}>
      <PhotoCarousel
          title="Customer Photos"
          count={500}
          images={images}
        />
    </div>
    <Styleguide/>
    
    </div>

  )
}

export default CardSample