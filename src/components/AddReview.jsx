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
      id: 0,
      review: '',
      rating: 1,
      date: new Date(),
      eatery: ''
});


    const toggleReviewForm = () => {
        setShowReviewForm(!showAddReview);
        //document.body.style.overflow = showAddReview ? 'auto' : 'hidden';
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
        console.log("lets see whats happening: ", userid, username)
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
        <div className='popupbg' style={{ position: "fixed", width: "100%", height: "100%", top: 0, left: 0 }}>
        <div className='popup'>
          <button
                className="button1"
                onClick={() => setShowReviewForm(!showAddReview)}
                style={{ marginRight: '130px' }}
              >
                x 
              </button>
            <form onSubmit={handleSubmit}>
              <div>
                <textarea 
                  name="review"
                  placeholder="Write your review here"
                  value={reviewFormData.review}
                  onChange={handleReviewTextChange}
                  rows="20"
                  cols="80"
                />
                <div className="review-form-row" style={{display: 'flex', justifyContent: 'space-around', marginTop: '1.5vh'}}>
                  <select
                    className='rating-button'
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
                  <button className='button2' type="submit">Submit</button>
                </div>
              </div>
            </form>
      </div>
      </div>
      )}
    </div>
  </div>
);

}

export default AddReview;