import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Signup() {
  const BASE_URL = 'http://0.0.0.0:3001';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (event) =>  {
    event.preventDefault();

    // Perform validation
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!id) {
      errors.id = 'ID is required';
    }
    if (!contact) {
      errors.contact = 'Contact is required';
    } else if (!/^[0-9]{11}$/.test(contact)) {
      errors.contact = 'Contact number is invalid';
    }

    // Update error state and submit form if there are no errors
    if (Object.keys(errors).length === 0) {
      setErrors({});
      // Submit form
      try 
      {
        let userData = {
          name,
          email,
          id,
          contact,
          password
        }
        const res = await axios.post(`${BASE_URL}/api/createuser`, userData);
        // console.log(res.data);
        // setIsSignedUp(true);
        navigate(`/login?signedup=true`); 
      } 
      catch (error)
      {
        console.log(error.response.status); //rmbr
        if (error.response.status === 400)
        {
          const message = await error.response.data;
          errors.submit = message;
          console.log(errors.submit);
          setErrors(errors); //user already exists
        }
        else 
        {
          // generic error handling
          setErrors({submit:'An error occurred. Please try again later.'});
        }
      }
    } else {
      setErrors(errors);
    }
  }

  function handleFocus(event) {
    const inputName = event.target.name;
    setErrors(prevErrors => {
      return { ...prevErrors, [inputName]: undefined };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} onFocus={handleFocus} />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} onFocus={handleFocus} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={id} onChange={e => setId(e.target.value)} onFocus={handleFocus} />
        {errors.id && <div className="error">{errors.id}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <input type="tel" id="contact" name="contact" value={contact} onChange={e => setContact(e.target.value)} onFocus={handleFocus} />
        {errors.contact && <div className="error">{errors.contact}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="tel" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} onFocus={handleFocus} />
      </div>
      <button type="submit">Sign up</button>
      {errors.submit && <div className="error">{errors.submit}</div>}
    </form>
  );
}

