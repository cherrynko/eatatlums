import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  // const BASE_URL = 'http://localhost:3001';
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    contact: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input fields
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^[0-9]{10}$/; // Matches 10 digits
    const idRegex = /^[0-9]+$/; // Matches only digits
    if (!userData.name) {
      errors.name = 'Name is required';
    }
    if (!userData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(userData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!userData.contact) {
      errors.contact = 'Contact number is required';
    } else if (!contactRegex.test(userData.contact)) {
      errors.contact = 'Invalid contact number';
    }
    if (!userData.id) {
      errors.id = 'ID is required';
    } else if (!idRegex.test(userData.id)) {
      errors.id = 'Invalid ID';
    }

    if (Object.keys(errors).length === 0) {
      // Submit form data to server
      try {
        const res = await axios.post(`${BASE_URL}/api/createuser`, userData);
        console.log(res.data);
        setIsSignedUp(true);
        navigate(`/login?signedup`);      
      } catch (error) {
        console.error(error);
      }
    } else {
      // Display validation errors
      setErrors(errors);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="text"
            className={`form-control ${errors.id ? 'is-invalid' : ''}`}
            id="id"
            name="id"
            value={userData.id}
            onChange={handleChange}
          />
          {errors.id && <div className="invalid-feedback">{errors.id}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact Number
          </label>
          <input
            type="text"
            className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
            id="contact"
            name="contact"
            value={userData.contact}
            onChange={handleChange}
          />
          {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            password
          </label>
          <input
            type="text"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
              Sign up
        </button>


      </form>
      </div>
  )}