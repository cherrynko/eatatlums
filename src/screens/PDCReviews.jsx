import React from 'react'
import EachEateryNavbar from "../components/EachEateryNavbar";
import AddReview from '../components/AddReview';
import SearchReviews from '../components/SearchReviews';
import DisplayReviews from '../components/UserReviews';
import './PDCReviews.css'


export default function PDCReviews() {
  return (
    <div>

      <EachEateryNavbar />
      <SearchReviews />
      <AddReview />
      <DisplayReviews />

    </div>
  )
}


