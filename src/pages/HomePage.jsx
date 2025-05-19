import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/HomePage.css";
import tnLogo from "../assets/tn_logo.png";

// Import background images correctly
import homeBg1 from "../assets/home_bg1.jpg";
import homeBg2 from "../assets/home_bg2.jpg";
import homeBg3 from "../assets/home_bg3.jpg";
import homeBg from "../assets/home_bg.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  // Array of imported background images
  const backgroundImages = [homeBg1, homeBg2, homeBg3, homeBg];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle automatic image transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]); // ✅ FIX: Added `backgroundImages.length` in the dependency array

  // Handle navigation
  const handleSignUp = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="homepage">
      {/* Background slideshow */}
      <div
        className="background-image fade-in"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      />

      <div className="overlay">
        {/* Header */}
        <header className="header">
          <div className="logo-container">
            <img src={tnLogo} alt="Tamil Nadu Government Logo" className="logo" />
            <div className="header-text">
              <h2>Government of Tamilnadu</h2>
              <h3>தமிழ்நாடு அரசு</h3>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="content-container">
          <h1 className="main-title">
            Fall Lock System - Ensuring<br />Borewell Safety
          </h1>

          <p className="description">
            FallLock System, a government-approved initiative, offers temporary Borewell
            Safety Kits to prevent accidents. Users can request a kit, secure open
            borewells, and return it once sealed to ensure safety for all.
          </p>

          {/* Corrected Button Styling */}
          <div className="button-container">
            <span>Want to know more?</span>
            <button className="sign-up" onClick={handleSignUp}>Login</button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HomePage;

