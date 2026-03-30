import React, { useState } from "react";
import { Images } from "../../images/Image";

const ReviewCard = ({
    rating = 4.5,
    reviewText,
    images = [],
    userName,
    role = "Certified Dealer",
    date,
    likes: initialLikes = 5,
    dislikes: initialDislikes = 1,
}) => {


    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);


    const handleLike = () => {
        if (action === "like") {
            setLikes(likes - 1);
            setAction(null);
        } else {
            setLikes(likes + 1);
            if (action === "dislike") setDislikes(dislikes - 1);
            setAction("like");
        }
    };

    const handleDislike = () => {
        if (action === "dislike") {
            setDislikes(dislikes - 1);
            setAction(null);
        } else {
            setDislikes(dislikes + 1);
            if (action === "like") setLikes(likes - 1);
            setAction("dislike");
        }
    };



    return (
        <div className="review-card">

            <div className="review-top">
                <div className="rating-badge">
                    <img src={Images.ministar} />
                    <h6>{rating}</h6>
                </div>
                <h6 className="review-text">
                    {reviewText}
                </h6>
            </div>

            <div className="review-images">
                {images.map((img, index) => (
                    <div className="img-box" key={index}>
                        <img src={img} alt="review" />
                    </div>
                ))}
            </div>

            <div className="review-footer">
                <div className="user-info">
                    <span className="user-name">{userName}</span>
                    <span className="certified">
                        <img src={Images.certified} />{role}
                    </span>
                    <span className="date">{date}</span>
                </div>

                <div className="actions">
                    <span className="certified"  ><img onClick={handleLike} src={Images.handlike} style={{ color: action === "like" ? "blue" : "black", cursor: "pointer" }}
                    />{likes}</span>
                    <span className="certified"><img onClick={handleDislike} src={Images.dislike} />{dislikes}</span>
                </div>
            </div>
            <div className="dividing-line"></div>
        </div>
    );
};

export default ReviewCard;