import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSignedUp = queryParams.get("signedup");
  console.log(isSignedUp);
  const navigate = useNavigate();
  // const jwt = require('jsonwebtoken');

  const BASE_URL = "http://localhost:3001";

  const [userData, setUserData] = useState({
    id: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {};
    if (!userData.id) {
      errors.id = "ID is required";
    }
    if (!userData.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      setErrors({});
      try {
        let res = await axios.post(`${BASE_URL}/api/loginuser`, userData);
        console.log(JSON.stringify(res.data.body));

        localStorage.setItem("token", JSON.stringify(res.data.body));
        navigate("/");
      } catch (error) {
        if (error.response.status === 400)
        {
          const message = await error.response.data;
          errors.submit = message;
          console.log(errors.submit);
          setErrors(errors);
        }
        else 
        {
          // generic error handling
          setErrors({submit:'An error occurred. Please try again later.'});
        }
      }
    }
    else {
      setErrors(errors);
    }



  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignedUp && <p>Sign up successful! You may now log in.</p>}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          id
        </label>
        <input
          type="text"
          className="form-control"
          id="ud"
          name="id"
          onChange={handleChange}
          value={userData.id}
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
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {errors.submit && <div className="error">{errors.submit}</div>}
    </form>
  );
}

export default Login;
