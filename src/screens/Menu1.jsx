import React from 'react'
import EachEateryNavbar from "../components/EachEateryNavbar";
import './Menu1.css'


export default function Menu1() {
    return (
    <div>
        <EachEateryNavbar />
        <div className="search-container">
        <form>
            <div className="input-container">
            <button type="submit" className="search-button">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"></img>
                {/* <i className="fa fa-search"></i> */}
            </button>
            <input type="text" placeholder="Search.." name="search" className="search-input" />
            </div>
        </form>
        </div>
    </div>
    )
}
 