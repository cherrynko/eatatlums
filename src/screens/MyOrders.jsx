import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Eateries.css'
import EateriesNavbar from "../components/EateriesNavbar";

export default function MyOrders() {
    return (
        <div>
            <EateriesNavbar />
            <h1>My Orders</h1>
            <form>
                <div className="input-container">
                    <button type="submit" className="search-button">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"></img>
                        {/* <i className="fa fa-search"></i> */}
                    </button>
                    <input type="text" placeholder="Search.." name="search" className="search-input" />
                </div>
            </form>
        </div>

    )
}