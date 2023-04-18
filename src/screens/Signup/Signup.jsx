import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../../Route/Route'






const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation
    let errorsObj = {};

    if (!name) {
      errorsObj.name = 'Name is required';
    }

    if (!email) {
      errorsObj.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsObj.email = 'Email is invalid';
    }

    if (!id) {
      errorsObj.id = 'ID is required';
    }

    if (!contact) {
      errorsObj.contact = 'Contact is required';
    } else if (!/^[0-9]{11}$/.test(contact)) {
      errorsObj.contact = 'Contact number is invalid';
    }

    if (password.length < 6) {
      errors.password = "Password must be atleast 6 character long"
    }


    // Update error state and submit form if there are no errors
    if (Object.keys(errorsObj).length === 0) {
      setErrors({});

      // Submit form
      try {
        let userData = {
          name,
          email,
          id,
          contact,
          password
        }
        await axios.post(`${BASE_URL}/api/createuser`, userData);
        navigate(`/login`);
      }

      catch (error) {
        if (error.response.status === 400) {
          const message = await error.response.data;
          errorsObj.server = message["errors"][0].msg;
          setErrors(errorsObj);                    // error when user already exists
        }
        else {  // generic error handling
          errorsObj.server = 'An error occurred. Please try again later.'
          setErrors(errorsObj);  
        }
      }
    }
    
    else {
      setErrors(errorsObj);
    }
  }

  function handleFocus(event) {
    const inputName = event.target.name;
    setErrors(prevErrors => {
      return { ...prevErrors, [inputName]: undefined };
    });
  }


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} onFocus={handleFocus} />
          {errors?.name && <div className="error">{errors?.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} onFocus={handleFocus} />
          {errors?.email && <div className="error">{errors?.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" value={id} onChange={e => setId(e.target.value)} onFocus={handleFocus} />
          {errors?.id && <div className="error">{errors?.id}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input type="tel" id="contact" name="contact" value={contact} onChange={e => setContact(e.target.value)} onFocus={handleFocus} />
          {errors?.contact && <div className="error">{errors?.contact}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="tel" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} onFocus={handleFocus} />
          {errors?.password && <div className="error">{errors?.password}</div>}
        </div>
        <input type="submit" />
        {errors?.server && <div style={{ "color": "red" }} className="error">{errors?.server}</div>}
      </form>
        <div style={{ marginTop: "12px" }}><Link to="/login">Already have an account? </Link></div>
    </div>

  );
}





export default Signup