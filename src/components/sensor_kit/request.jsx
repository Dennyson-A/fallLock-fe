import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Request.css";

const Request = () => {
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/requests"); // replace with your backend URL
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching request data:", error);
    }
  };

  const filteredRequests = requests.filter((req) =>
    req.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="request-container">
      <div className="request-header">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="request-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
          <button className="request-btn">Filter ⬇</button>
          <button className="request-btn">Export ⬇</button>
    </div>

      <div className="table-container">
        <table className="kit-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Username</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((req, index) => (
              <tr key={req._id}>
                <td>{index + 1}</td>
                <td>{req.username}</td>
                <td>{req.contact}</td>
                <td>{req.location}</td>
                <td>{req.date}</td>
                <td>
                  <span>{req.approve ? "✓" : ""}</span> &nbsp;
                  <span>{req.reject ? "✗" : ""}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Request;
