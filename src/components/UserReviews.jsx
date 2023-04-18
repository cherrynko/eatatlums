import React, { useEffect, useState } from "react";
import axios from "axios";
import RatingStars from "./RatingStars";
import "./UserReviews.css";

const DisplayReviews = () => {
    const [reviews, setReviews] = useState([]);
    const BASE_URL = 'http://localhost:3001';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/getreviews`);
                setReviews(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {reviews.map((review) => (
                <div key={review._id}>
                    <p>Name: {review.name}</p>
                    <p>Date: {review.date}</p>
                    <p>Rating: {review.rating}</p>
                    <p>Review: {review.review}</p>
                    <p>Eatery: {review.eatery}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default DisplayReviews;