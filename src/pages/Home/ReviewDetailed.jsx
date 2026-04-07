import React from 'react'
import Card from '../../components/card/Card'
import { Images } from '../../images/Image';
import RatingReview from '../../components/card/RatingReview';
import Productreview from '../../components/card/Productreview';
import PhotoCarousel from '../../components/card/PhotoCarousel';
import ReviewCard from '../../components/card/ReviewCard';
import MobileHeader from '../../components/mobileHeader/MobileHeader';
import ProRevMob from '../../components/card/ProRevMob';


const ReviewDetailed = () => {
    const reviewproducts = [
        { id: 2, title: "PROBIZYME", price: 1100, oldPrice: 2000, discount: "45% off", badge: "Sale", image: Images.product, rating: "5.0", reviews: "20K" },

    ];
    const ratings = [
        { star: 5, count: 12443, color: "rgba(1, 152, 18, 1)" },
        { star: 4, count: 3943, color: "rgba(1, 152, 18, 1)" },
        { star: 3, count: 1566, color: "rgba(114, 191, 188, 1)" },
        { star: 2, count: 754, color: "rgba(252, 179, 1, 1)" },
        { star: 1, count: 2133, color: "rgba(241, 101, 101, 1)" },
    ];

    const maxCount = Math.max(...ratings.map(r => r.count));

    const image = [
        Images.rightcurve,
        Images.innerproduct,
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


    return (
        <div className='container'>
            <MobileHeader title="Ratings & Reviews" />
            {/* webcontainer */}
            <div className='rev-del-container'>
                <div className='rev-card-mob'>
                    {reviewproducts.map((item) => (
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
                            hideAddCart={true}
                            hideDropdownIcon={true}
                            hideLike={true}
                        />
                    ))}
                </div>
                <div>
                    <div className='rev-del-row'>
                        <div className="display-none">
                            <div className="rating-rev-web" >
                                <RatingReview title="20.8k Verified Buyers" />
                            </div>
                            <div className="rating-rev-mob">
                                <RatingReview title="35 Ratings 80 Reviews" />
                            </div>

                            <ProRevMob />
                        </div>
                        <Productreview className="rev-pro-mob" />
                    </div>
                    <PhotoCarousel
                        title="Customer Photos"
                        count={500}
                        image={image}
                    />
                    <div>
                      
                    </div>

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
                </div>
            </div>

            {/* mobilecontainer */}



        </div>
    )
}

export default ReviewDetailed