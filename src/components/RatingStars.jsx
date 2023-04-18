import React from "react";
import "./RatingStars.css"; // import the CSS file that defines the star color

const RatingStars = ({ rating }) => {
  const numStars = Math.round(parseFloat(rating));
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push(<span key={i} className="star1">&#9733;</span>);
  }
  for (let i = numStars; i < 5; i++) {
    stars.push(<span key={i} className="star3">&#9733;</span>);
  }

  return <div>{stars}</div>;
};

export default RatingStars;



