import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./SearchReviews.css"

function SearchBar() {
    const BASE_URL = 'http://localhost:3001';
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        console.log("Search Query sent to server: ", query);
        try {
            const response = await axios.get(`${BASE_URL}/api/search?q=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            {results.map((result) => (
                <div key={result.id}>
                    <p>Name: {result.name}</p>
                    <p>Date: {result.date}</p>
                    <p>Rating: {result.rating}</p>
                    <p>Review: {result.review}</p>
                    <p>Eatery: {result.eatery}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SearchBar;