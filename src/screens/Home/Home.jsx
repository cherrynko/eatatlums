import React, { useEffect } from "react";
import { Link, useMatch, useResolvedPath,  useNavigate } from "react-router-dom";
import '../Eateries/Eateries.css'
import BASE_URL from '../../Route/Route'



export default function Home() {
  return (
    <div>
      <div className="home-container">
      <div className="welcome-box">
        <h1 className="welcome-text">Welcome to Eat@Lums!</h1>
        <p className="abstract-text">Our app is designed to help you find and order food from your favorite eateries in and around LUMS. Whether you're a student, faculty member, or just visiting campus, we've got you covered!</p>
      </div>
    </div>
    </div>
  );
}
