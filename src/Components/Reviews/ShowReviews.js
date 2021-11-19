import React, { useEffect, useState } from 'react';
import "./ShowReviews.css"
const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://still-river-80728.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h1 className="text-center">Review</h1>
            {
                reviews.map(review =>
                    <div className="Container reviews"
                        key={review._id}
                    >
                        <h2 className="text-center">User:{review.Name}</h2>
                        <h2 className="text-center ">Rating:<i class="fa fa-star-o"></i>{review.star}</h2>
                        <h2 className="text-center">Comment:{review.myDescription}</h2>

                    </div>)
            }
        </div >
    );
};

export default ShowReviews;