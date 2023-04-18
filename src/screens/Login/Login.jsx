import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import BASE_URL from '../../Route/Route'



const Login = () => {
  const navigate= useNavigate()
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    id: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorsObj = {};
    if (!userData.id) {
      errorsObj.id = "ID is required";
    }
    if (!userData.password) {
      errorsObj.password = "Password is required";
    }

    if (Object.keys(errorsObj).length === 0) {
      setErrors({});

      try {
        let res = await axios.post(`${BASE_URL}/api/loginuser`, userData);
        if (res.data?.authToken){
          localStorage.setItem("auth_token", res.data?.authToken)
          window.location.href = "/";
        }

      } catch (error) {
        if (error.response.status === 400){
          console.log("errors ", error)
          const message = await error.response.data;
          errorsObj.server = message["errors"][0].msg;
          setErrors(errorsObj);    
        }
        else {
          // generic error handling
          errorsObj.server = 'An error occurred. Please try again later.'
          setErrors(errorsObj);  
        }
      }
    }
    else {
      setErrors(errorsObj);
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
    <div>
      <form onSubmit={handleSubmit}>
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
          {errors?.id && <div className="error">{errors?.id}</div>}
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
          {errors?.password && <div className="error">{errors?.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {errors?.server && <div style={{ "color": "red" }} className="error">{errors?.server}</div>}
      </form>
      <div style={{ marginTop: "12px" }}><Link to="/signup">Don't have an account?</Link></div>
    </div>
  )
}

export default Login