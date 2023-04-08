import React, { useEffect, useState } from "react";
import axios from "axios";

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
            <h1>Reviews:</h1>
            {reviews.map((review) => (
                <div key={review._id}>
                    <p>{review.review}</p>
                    <p>{review.name}</p>
                    <p>{review.date}</p>
                </div>
            ))}
        </div>
    );
};

export default DisplayReviews;
