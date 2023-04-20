import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "./AddReview.css"

function getSubstring(str, start, end) {
    const startIndex = str.indexOf(start) + start.length;
    const endIndex = str.indexOf(end, startIndex);
    return str.substring(startIndex, endIndex);
}


function AddReview() {
    const location = useLocation();
    const path = location.pathname;
    const eateryName = getSubstring(path, '/', 'reviews')
    const [showAddReview, setShowReviewForm] = useState(false);
    const BASE_URL = 'http://localhost:3001';
    const [errors, setErrors] = useState({});

    const [reviewFormData, setReviewData] = useState({

        name: '',
        id: Number,
        review: '',
        rating: 1,
        date: Date,
        eatery: ''
    });

    const toggleReviewForm = () => {
        setShowReviewForm(!showAddReview);
    };

    const handleReviewTextChange = (event) => {
        // setReviewText(event.target.value);
        const { name, value } = event.target;
        setReviewData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleStarRatingChange = (event) => {
        const { name, value } = event.target;
        setReviewData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        console.log("im inside handle submit")
        event.preventDefault();
        const errors = {};

        if (!reviewFormData.review) {
            errors.name = "Review Text is required";
        } else if (!reviewFormData.rating) {
            errors.name = "Star Rating is required";
        }

        let username = ''
        let userid = ''

        let token = JSON.parse(localStorage.getItem('token'));
        if (JSON.parse(localStorage.getItem('token'))) {
            console.log("kuch bhi ")
        }
        username = token.name;
        userid = token.id;
        console.log("lets see whats happening: ", userid, username);
        console.log(username, userid, "submitted a review form");
        reviewFormData.date = new Date().toLocaleString();
        reviewFormData.id = userid;
        reviewFormData.name = username;
        reviewFormData.eatery = eateryName;


        if (Object.keys(errors).length === 0) {
            try {
                const res = await axios.post(`${BASE_URL}/api/writereview`, reviewFormData);
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        } else {
            setErrors(errors);
        }

        console.log(`"${username}" "${userid}" Submitted review: "${reviewFormData.review}" with ${reviewFormData.rating} stars`);

    };

    return (
        <div>
            <div className="addReview-container">
                <button onClick={toggleReviewForm} className="add-review-button">
                    + Add Review
                </button>
                {showAddReview && (
                    <form onSubmit={handleSubmit}>
                        <div className="review-form-row">
                            <textarea
                                name="review"
                                placeholder="Write your review here"
                                value={reviewFormData.review}
                                onChange={handleReviewTextChange}
                            />
                            <div className="review-form-row">
                                <span>Rating: </span>
                                <select
                                    name="rating"
                                    value={reviewFormData.rating}
                                    onChange={handleStarRatingChange}
                                >
                                    <option value="1">1 star</option>
                                    <option value="2">2 stars</option>
                                    <option value="3">3 stars</option>
                                    <option value="4">4 stars</option>
                                    <option value="5">5 stars</option>
                                </select>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );

}

export default AddReview;