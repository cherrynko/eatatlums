import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {


  const [errors, setError] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSignedUp = queryParams.get('signedup');
  console.log(isSignedUp);
  const navigate = useNavigate();
  const BASE_URL = 'http://localhost:3001';

  const [userData, setUserData] = useState({
    id: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try 
    {
      let res = await axios.post(`${BASE_URL}/api/loginuser`, userData);
      console.log(res.data.body.name, "hiiiii");
      localStorage.setItem('token', res.data.body);
      navigate('/');
    }
    catch (error) {
      setError('Something went wrong');
      console.log(error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {isSignedUp && <p>Sign up successful! You may now log in.</p>}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">id</label>
        <input type="text" className="form-control" id="ud" name="id" onChange={handleChange} value={userData.id} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={handleChange} value={userData.password} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Login;
