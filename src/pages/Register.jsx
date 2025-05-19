import React, { useState } from 'react';
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import './styles/register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    username: '',
    password: '',
    aadhar: '',
    address: '',
    district: '',
    purpose: [],
    startDate: '',
    endDate: '',
    locationType: [],
    returnKit: false,
    refundableDeposit: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && (name === 'purpose' || name === 'locationType')) {
      setFormData((prev) => {
        const updated = prev[name].includes(value)
          ? prev[name].filter((v) => v !== value)
          : [...prev[name], value];
        return { ...prev, [name]: updated };
      });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submission logic here
  };

  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className="register-wrapper">
        <div className="form-container">
          <h2>
            Join us in creating a safer community –<br />
            your voice matters! Register now to make a difference.
          </h2>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name *" required value={formData.name} onChange={handleChange} />
            <input type="tel" name="mobile" placeholder="Mobile Number *" required value={formData.mobile} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email ID *" required value={formData.email} onChange={handleChange} />
            <input type="text" name="username" placeholder="Username *" required value={formData.username} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password *" required value={formData.password} onChange={handleChange} />
            <input type="text" name="aadhar" placeholder="Aadhar ID *" required value={formData.aadhar} onChange={handleChange} />
            <textarea name="address" placeholder="Address *" required value={formData.address} onChange={handleChange}></textarea>
            <input type="text" name="district" placeholder="District/Taluk/Village Name *" required value={formData.district} onChange={handleChange} />

            <h3>Purpose of Borewell *</h3>
            <div className="checkbox-group">
              {["Agriculture", "Domestic", "Industry"].map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    name="purpose"
                    value={item}
                    checked={formData.purpose.includes(item)}
                    onChange={handleChange}
                  />
                  {item}
                </label>
              ))}
            </div>

            <input type="date" name="startDate" required value={formData.startDate} onChange={handleChange} />
            <input type="date" name="endDate" required value={formData.endDate} onChange={handleChange} />

            <h3>Borewell Location Type *</h3>
            <div className="checkbox-group">
              {["Private", "Public"].map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    name="locationType"
                    value={item}
                    checked={formData.locationType.includes(item)}
                    onChange={handleChange}
                  />
                  {item}
                </label>
              ))}
            </div>

            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="returnKit"
                  checked={formData.returnKit}
                  onChange={handleChange}
                />
                Kit will be returned after borewell closure.
              </label>

              <label>
                <input
                  type="checkbox"
                  name="refundableDeposit"
                  checked={formData.refundableDeposit}
                  onChange={handleChange}
                />
                ₹200 refundable deposit agreement.
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;