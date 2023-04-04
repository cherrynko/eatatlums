import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.css"



const HandleLogout = () => {
  localStorage.removeItem('token');

};

function Navbar() {
  const [user, setUser] = useState('');
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  let firstname = null
  // setUser(localStorage.getItem('token'));
  if (isLoggedIn)
  {
     let token = JSON.parse(localStorage.getItem('token')); 
    let firstname = token.name.split(" ")[0];
    console.log(firstname, "hiii23");
  }
 

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
          <li className="navbar-nav" style={{ marginLeft: 'auto' }}>
            <Link className="nav-link" to="/profile">Hey, {firstname}</Link>
          </li>
        )}
        </ul>

        {isLoggedIn && (
          <li className="log-out">
          <Link to="/" onClick={HandleLogout}>Logout</Link>
        </li>
        )}
        
          

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  );
}

export default Navbar;
