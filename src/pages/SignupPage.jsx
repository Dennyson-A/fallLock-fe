import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import drillingFluidImg from '../assets/drilling-fluid.png';
import tamilnaduLogo from '../assets/tn_logo.png';
import './styles/signup.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
  };

  return (
    <div className="signup-page">
      <div className="signup-image">
      <div className="logo-header">
          <img src={tamilnaduLogo} alt="Tamil Nadu Logo" />
          <div>
            <h3>Government of Tamilnadu</h3>
            <span>தமிழ்நாடு அரசு</span>
          </div>
        </div>
        <img src={drillingFluidImg} alt="Drilling fluid" />
      </div>
      <div className="signup-form">
        
        <h2>Sign Up</h2>
        <p>Welcome !! Please enter your details.</p>

        <form onSubmit={handleSubmit}>
          <label>Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Password *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label>Confirm password *</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

          <button type="submit">Submit</button>

          <p className="footer">
            Have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
