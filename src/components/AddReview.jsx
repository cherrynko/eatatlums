import React, { useState } from 'react';

function AddReview() {
    const [showAddReview, setShowReviewForm] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [starRating, setStarRating] = useState(0);

    const toggleReviewForm = () => {
        setShowReviewForm(!showAddReview);
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleStarRatingChange = (event) => {
        setStarRating(parseInt(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentTime = new Date().toLocaleString();
        const reviewFormData = {


            review: reviewText,
            rating: starRating,
            date: currentTime
        }
        console.log(`Submitted review: "${reviewText}" with ${starRating} stars`);

        // Here you would typically send the data to a server or perform some other action with it
    };

    return (
        <div>
            <button onClick={toggleReviewForm}>Add Review</button>
            {showAddReview && (
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Write your review here"
                        value={reviewText}
                        onChange={handleReviewTextChange}
                    />
                    <div>
                        <span>Rating: </span>
                        <select value={starRating} onChange={handleStarRatingChange}>
                            <option value="1">1 star</option>
                            <option value="2">2 stars</option>
                            <option value="3">3 stars</option>
                            <option value="4">4 stars</option>
                            <option value="5">5 stars</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default AddReview;
