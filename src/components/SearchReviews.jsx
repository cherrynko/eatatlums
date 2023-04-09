import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchReviews = () => {
    const [reviews, setReviews] = useState([]);
    const BASE_URL = 'http://localhost:3001';

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = async (event) => {
        event.preventDefault();
        const response = await axios.get(`${BASE_URL}/getsearchreviews/${searchTerm}`);
        setReviews(response.data);
    };

    return (
        <div>
            <h1>Reviews</h1>
            <div className="search-container">
                <form onSubmit={handleSearch}>
                    <div className="input-container">
                        <button type="submit" className="search-button">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"></img>
                        </button>
                        <input
                            type="text"
                            placeholder="Search.."
                            name="search"
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div className="review-list">
                {reviews.map((review) => (
                    <div key={review._id} className="review">
                        <h2>{review.review}</h2>
                        <p>{review.name}</p>
                        <p>{review.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchReviews;
