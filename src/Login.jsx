import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send data to server)
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>LOGIN-SCREEN</h1>
        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to All Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
