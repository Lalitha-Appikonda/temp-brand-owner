import React from 'react'
import { Images } from '../../images/Image'
import Buttons from '../form-elements/Buttons';

const RatingReview = ({title}) => {


    const ratings = [
        { star: 5, count: 12443, color: "rgba(1, 152, 18, 1)" },
        { star: 4, count: 3943, color: "rgba(1, 152, 18, 1)" },
        { star: 3, count: 1566, color: "rgba(114, 191, 188, 1)" },
        { star: 2, count: 754, color: "rgba(252, 179, 1, 1)" },
        { star: 1, count: 2133, color: "rgba(241, 101, 101, 1)" },
    ];

    const maxCount = Math.max(...ratings.map(r => r.count));
    return (
        <div className='reviewrating-container'>
            <div >
                <h4 className='rating-review-text'>Probizyme Ratings & Reviews</h4>
                <div className='rating-content'>
                    <div>
                        <span className='star-rating'>
                            4.4<img src={Images.ministar} />
                        </span>
                        <h5 className='verified-text verified-text-mob'>{title}</h5>
                    </div>
                    <div className='rating-breakdown'>
                        <img src={Images.reviewline} />
                    </div>
                        <div className="rating-container">
                            {ratings.map((item) => {
                                const width = (item.count / maxCount) * 100;

                                return (
                                    <div className="rating-row" key={item.star}>
                                        <div className="left">
                                            {item.star} <img src={Images.bluestar}/>
                                        </div>

                                        <div className="bar">
                                            <div
                                                className="fill"
                                                style={{
                                                    width: `${width}%`,
                                                    backgroundColor: item.color,
                                                }}
                                            ></div>
                                        </div>

                                        <div className="count">{item.count}</div>
                                    </div>
                                );
                            })}
                        </div>

                  
                   
                    </div>
                </div>

          
        </div>
    )
}

export default RatingReview