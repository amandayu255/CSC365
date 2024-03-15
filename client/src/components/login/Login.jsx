import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        if (res.data) {
          window.location.href = "/home";
        }
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={handleUserChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={handleUserChange}
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>

      <label>
        <br />
        Don't have an account? <a href="/signup">Sign Up</a>
      </label>
    </div>
  );
};

export default Login;
