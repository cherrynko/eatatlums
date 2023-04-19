import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./SearchReviews.css"
import RatingStars from "./RatingStars";


function SearchBar() {
    const BASE_URL = 'http://localhost:3001';
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = async () => {
        console.log("Search Query sent to server: ", query);
        try {
            const response = await axios.get(`${BASE_URL}/api/search?q=${query}`);
            setResults(response.data);
            setShowResults(true);
        } catch (error) {
            console.error(error);
        }
    };

    const PopUp = () => (
        <div className='popupbg' style={{ position: "fixed", width: "100%", height: "100%", top: 0, left: 0 }}>
        <div className='popup'>
          <button
            className="button1"
            onClick={() => setShowResults(false)}
            style={{ marginRight: '130px' }}
          >
            x         
          </button>
         <h1 style={{ textAlign: "left", marginLeft: "5.5%", marginTop: "0%" }}>Search results: </h1>
          {results.map((result) => (
            <div key={result.id}>
                <div className='search-review-container'>
                    <div className='search-name-rating'>  
                    <p className='search-grey-text'>Name: {result.name}</p>
                    <RatingStars rating={result.rating} />
                </div>
                <p className="search-grey-text">Date: {result.date}</p>
                <p className="search-white-text">Review: {result.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            {showResults && <PopUp />}
        </div>
    );
}

export default SearchBar;
