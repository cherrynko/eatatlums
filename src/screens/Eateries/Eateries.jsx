import React, { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import "../Eateries/Eateries.css";
import axios from "axios";
import BASE_URL from "../../Route/Route";

export default function Eatery() {
  const navigate = useNavigate();
  const [eateries, setEateries] = useState([]);
  const [fetched, setfetched] = useState(false)

  useEffect(() => {
   
         axios
      .get(`${BASE_URL}/api/eateries`)
      .then((response) => {
        setEateries(Array.isArray(response.data) ? response.data : [response.data]);
        console.log("Eateries:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching eateries:", error);
      });
   
   
  }, []);

//   useEffect(() => {
//     const eateriesContainer = document.querySelector(".eateries-container");
//     if (fetched === false)
//     {

//     // eateries.forEach((eatery) => {
//     //   const eateryContainer = document.createElement("div");
//     //   eateryContainer.classList.add("eateries-item");

//     //   const eateryLink = document.createElement("a");
//     //   eateryLink.href = `/menu/${eatery.eatery_id}`;
//     //   eateryLink.textContent = eatery.name;

//     //   eateryContainer.appendChild(eateryLink);

//     //   eateriesContainer.appendChild(eateryContainer);

//     //   setfetched(true)

//     // });
    
// }

    
//   }, [eateries]);

  return (
    <div className="eateries-container">
    {eateries.map((eatery) => (
      <div
        key={eatery._id}
        className="eatery-container"
        onClick={() => navigate(`/menu/${eatery.name}`)}
      >
        <h3>{eatery.name}</h3>
      </div>
    ))}
  </div>
  );
}
