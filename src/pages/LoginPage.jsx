import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import drillingFluidImg from '../assets/drilling-fluid.png';
import tamilnaduLogo from '../assets/tn_logo.png';

import './styles/login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = isAdmin
      ? { email, password, role: 'admin' }
      : { username, password, role: 'user' };

    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData); // Replace with your API URL

      if (response.data.success) {
        console.log('Login successful:', response.data);

        // Example: store token
        // localStorage.setItem('token', response.data.token);

        // Redirect based on role
        if (isAdmin) {
          window.location.href = '/AdminHome';
        } else {
          window.location.href = '/UserHome';
        }
      } else {
        alert(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-header">
          <img src={tamilnaduLogo} alt="TN Logo" className="tn-logo" />
          <div>
            <h3>Government of Tamilnadu</h3>
            <p>தமிழ்நாடு அரசு</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Login</h2>
          <p>Welcome back! Please enter your details.</p>

          <div className="login-toggle">
            <button
              type="button"
              className={isAdmin ? '' : 'active'}
              onClick={() => setIsAdmin(false)}
            >
              User
            </button>
            <button
              type="button"
              className={isAdmin ? 'active' : ''}
              onClick={() => setIsAdmin(true)}
            >
              Admin
            </button>
          </div>

          {isAdmin ? (
            <>
              <label>Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </>
          ) : (
            <>
              <label>Username *</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </>
          )}

          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forget Password
            </Link>
          </div>

          <button type="submit" className="primary-btn">Sign in</button>

          <div className="google-login">
            <button type="button" className="google-btn">
              <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google" />
              Sign in with Google
            </button>
          </div>

          <p className="footer-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>

      <div className="auth-right">
        <img src={drillingFluidImg} alt="Drilling fluid" />
      </div>
    </div>
  );
}

export default LoginPage;
