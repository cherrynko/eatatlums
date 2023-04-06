import React from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import './Eateries.css'
import EateriesNavbar from "../components/EateriesNavbar";

export default function MyOrders() {
    return (
        <div>
            <EateriesNavbar />
            <h1>My Orders</h1>
        </div>
        
    )
}