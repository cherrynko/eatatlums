import React from 'react';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// const [userData, setUserData] = useState({});


// useEffect(() => {
//   const token = localStorage.getItem('token');

//   if (token) {
//     const decodedToken = jwt_decode(token);
//     setUserData(decodedToken);
//   }
// }, []);


function Navbar() {

  const isLoggedIn = !!localStorage.getItem('token');
  const username = localStorage.getItem('Name');

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

        {isLoggedIn && (
          <li className="Profile">
          <Link className="Profile" to="/profile">Hey, {username}</Link>
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
