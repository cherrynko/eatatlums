import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Navbar.css"


const HandleLogout = () => {
  localStorage.removeItem('token');
};

function Navbar() {
  const [user, setUser] = useState('');
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();
  const [name, setname] = useState('')

  let firstname = null
  // setUser(localStorage.getItem('token'));
  // if (isLoggedIn)
  // {
  //   let token = JSON.parse(localStorage.getItem('token')); 
  //   let firstname = token.name.split(" ")[0];
  //   // setname(firstname);
  //   console.log(firstname, "hiii23");
  // }
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token')); 
  if (token) {
      // setIsLoggedIn(true);
      // extract user name from token and set it to userName state
      // for example, if token contains {"username": "John"}, you can use
      let name = token.name.split(" ")[0];
      setname(name);
    }
  }, []);

 

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fst-italic" to="/">eat@lums</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>

        {!isLoggedIn && (
          <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        )}

        {!isLoggedIn && (
          <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
        )}

        {/* {isLoggedIn && (
          <li className="Profile">
          <Link className="Profile" to="/profile">Hey, {firstname}</Link>
        </li>
        )} */}

      <ul className="navbar-nav">
        {isLoggedIn && (
          <li className="navbar-nav" >
            <Link className="nav-link" to="/profile">Hey, {name}! </Link>
          </li>
        )}
        </ul>

        {isLoggedIn && (
          <li className="log-out">
          <Link to="/" onClick={HandleLogout}>Logout</Link>
        </li>
        )}
          
          {isLoggedIn && (
          <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-target="#" aria-expanded="false" onClick={(e) => { e.preventDefault(); }}>
          Actions
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><Link className="dropdown-item" to="/vieweateries">view eateries</Link></li>
          <li><Link className="dropdown-item" to="/viewfavourites">favourite meals</Link></li>
          <li><Link className="dropdown-item" to="/orderhistory">order history </Link></li>
        </ul>
      </li>
       )}

      </ul>
    </div>
  </div>
</nav>
</div>
  );
}

export default Navbar;
