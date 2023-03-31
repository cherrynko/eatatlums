import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [id, setid] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const isSignedUp = queryParams.get('signedup');
  console.log(isSignedUp);
  const navigate = useNavigate();
  const BASE_URL = 'http://localhost:3001';



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(id, password);
        const res = await axios.post(`${BASE_URL}/api/loginuser`, id);
      console.log(res.data);
      if (res.ok) {
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Something went wrong');
      console.log(error);
    }
  };
// try {
  // const res = await axios.post(`${BASE_URL}/api/createuser`, userData);
//   console.log(res.data);
//   setIsSignedUp(true);
//   navigate(`/login?signedup=true`); 
// } catch (error) {
//   console.error(error);
// }
  return (
    <div className="container">
      {isSignedUp && <p>Sign up successful! You may now log in.</p>}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Roll Number
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            aria-describedby="emailHelp"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/signup">
          <button type="button" className="btn btn-link">
            Sign up
          </button>
        </Link>
      </p>
    </div>
  );
}

export default Login;
