import React, { useState } from 'react';
import axios from 'axios';

function AddReview() {
    const [showAddReview, setShowReviewForm] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [starRating, setStarRating] = useState(0);
    const BASE_URL = 'http://localhost:3001';
    const [errors, setErrors] = useState({});

    const toggleReviewForm = () => {
        setShowReviewForm(!showAddReview);
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleStarRatingChange = (event) => {
        setStarRating(parseInt(event.target.value));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = {};

        if (!reviewText) {
            errors.name = "Review Text is required";
        } else if (!starRating) {
            errors.name = "Star Rating is required";
        }

        const isLoggedIn = !!localStorage.getItem('token');

        let username = null
        let userid = null
        // setUser(localStorage.getItem('token'));
        if (isLoggedIn) {
            let token = JSON.parse(localStorage.getItem('token'));
            let username = token.name;
            let userid = token.id;
            console.log(username, userid, "submitted a review form");

        }


        const currentTime = new Date().toLocaleString();
        const reviewFormData = {

            name: username,
            id: userid,
            review: reviewText,
            rating: starRating,
            date: currentTime
        }

        if (Object.keys(errors).length === 0) {
            // Submit review form data to server
            try {
                const res = await axios.post(`${BASE_URL}/api/writereview`, reviewFormData);
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        } else {
            // Display validation errors
            setErrors(errors);
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
