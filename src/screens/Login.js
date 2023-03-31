import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ isSignedUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submit
  };

  return (
    <div className="container">
      {isSignedUp && <p>Sign up successful! You may now log in.</p>}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
