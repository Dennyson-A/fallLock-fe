import React from "react";
import Background from "../assets/Background.png";
import borewell from "../assets/borewell.png";
import rescue from "../assets/rescue.png";
import safety from "../assets/safety.png";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import "./styles/AdminHome.css";

const AdminHome = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />

      {/* Main Section */}
      <main className="main">
        <div className="bg-container">
          <img src={Background} alt="Background" className="bg-image" />
          <div className="text-overlay">
            <p style={{ textAlign: "left" }}>Welcome to</p>
            <h2>Fall Lock System - Ensuring Borewell Safety</h2>
            <p style={{ fontSize: "14px" }}>
              Every year, numerous accidents occur due to uncovered borewells,
              putting innocent lives, especially children, at risk. FallLock
              System is a government-approved initiative that provides a
              temporary Borewell Safety Kit to secure open borewells,
              preventing tragic incidents. With our easy registration and
              request system, users can apply for a Borewell Safety Kit and
              contribute to making their surroundings safer. Once the borewell
              is permanently sealed, the kit must be returned to ensure its
              availability for others in need.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <section>
          <div className="bg-containerbody">
            <div className="process-container">
              <h2>How FallLock System Works?</h2>

              {/* Step 1 */}
              <div className="step-row left">
                <div className="step-circle">
                  <span>1</span>
                </div>
                <div className="step-text">
                  <h3>Register on the FallLock System Portal</h3>
                  <p>
                    Create an account by providing your name, contact details,
                    and address. This helps us track requests and ensure the
                    kits reach the right users.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-row right">
                <div className="step-circle">
                  <span>2</span>
                </div>
                <div className="step-text">
                  <h3>Submit Your Borewell Details and Request a Safety Kit</h3>
                  <p>
                    Enter the borewell location, current status (newly dug,
                    under maintenance, or abandoned), and the reason for
                    requesting the kit. This information helps authorities
                    verify and process your request.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-row left">
                <div className="step-circle">
                  <span>3</span>
                </div>
                <div className="step-text">
                  <h3>Request Verification and Kit Dispatch</h3>
                  <p>
                    Authorities will review your submission, conduct necessary
                    verification, and approve your request. Once verified, the
                    Borewell Safety Kit will be dispatched to your location or
                    made available for pickup.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="step-row right">
                <div className="step-circle">
                  <span>4</span>
                </div>
                <div className="step-text">
                  <h3>Install the Kit to Cover the Borewell Securely</h3>
                  <p>
                    Once you receive the kit, follow the provided instructions
                    to securely place it over the borewell. Ensure that it is
                    properly locked and stable to prevent accidents.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="step-row left">
                <div className="step-circle">
                  <span>5</span>
                </div>
                <div className="step-text">
                  <h3>Return the Kit After Permanent Closure</h3>
                  <p>
                    After sealing the borewell permanently, return the kit to
                    the designated collection center or schedule a pickup with
                    authorities. This ensures the kit can be reused for others
                    in need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 style={{ textAlign: "center",marginBottom:"20px", fontWeight: "bold" }}>
            Why Choose Fall Lock System?
          </h2>
          <div className="feature-box">
            <div className="feature-item">
              <h4 className="feature-title">🚑 A Life-Saving Solution</h4>
              <p>
                Open borewells pose a serious risk, especially to children. The
                FallLock System provides a temporary yet highly effective safety
                kit to cover borewells, preventing tragic accidents and ensuring
                public safety.
              </p>
            </div>
            <div className="feature-item">
              <h4 className="feature-title">🏛️ Government-Supported Initiative</h4>
              <p>
                This project is officially backed by government authorities,
                ensuring credibility, reliability, and seamless support for
                users.
              </p>
            </div>
            <div className="feature-item image-item">
              <img
                src={rescue}
                alt="Rescue Team"
                className="feature-image"
              />
            </div>
            <div className="feature-item">
              <h4 className="feature-title">🌍 Reusable & Sustainable</h4>
              <p>
                FallLock Safety Kits are collected, inspected, and sanitized
                before being redistributed. This ensures that safety measures
                remain cost-effective and eco-friendly.
              </p>
            </div>
            <div className="feature-item image-item">
              <img src={borewell} alt="Borewell" className="feature-image" />
            </div>
            <div className="feature-item">
              <h4 className="feature-title">🤝 Community Responsibility</h4>
              <p>
                By using and returning the kit after the borewell is permanently
                sealed, you help ensure its availability for others in need.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <div className="cta-container">
            <img src={safety} alt="Safety" className="cta-image" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminHome;
