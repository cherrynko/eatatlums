import React from "react";
import Navbar from "../components/Navbar";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Eateries.css'


export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="home-container">
      <div className="welcome-box">
        <h1 className="welcome-text">Welcome to Eat@Lums!</h1>
        <p className="abstract-text">Our app is designed to help you find and order food from your favorite eateries in and around LUMS. Whether you're a student, faculty member, or just visiting campus, we've got you covered!</p>
      </div>
    </div>
      <div className="image-background"></div>
      <div className="image-container">
        <div className='imgc'>
          <Link to="/menu1">
            <img className='imgclass' src="https://www.allrecipes.com/thmb/i9KCEbxUGQ1Sa4F7Gts7SGBOpoM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157877-vanilla-cupcakes-ddmfs-4X3-0397-59653731be1d4769969698e427d7f5bc.jpg" alt=""></img>
          </Link>
          <a href="https://www.google.com/">
            <img className='imgclass' src="https://myfoodstory.com/wp-content/uploads/2022/07/Chicken-Biryani-2.jpg" alt=""></img>
          </a>
        </div>

        <div className='imgc'>
          <a href="https://www.w3schools.com/css/css3_images.asp">
            <img className='imgclass' src="https://thumbs.dreamstime.com/b/meat-meatballs-black-plate-wooden-board-top-view-copy-space-234857391.jpg" alt=""></img>
          </a>
          <a href="https://www.youtube.com/">
            <img className='imgclass' src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-sausage-pasta%2Fsausage-pasta-4" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}
