import React, { useEffect, useState } from "react";
import axios from "axios";
import "./issued.css";

const Issued = () => {
  const [issuedData, setIssuedData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchIssuedData();
  }, []);

  const fetchIssuedData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/kits/issued"); // replace with your backend URL
      setIssuedData(response.data);
    } catch (error) {
      console.error("Error fetching issued kits:", error);
    }
  };

  const filteredIssued = issuedData.filter((item) =>
    item.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="issued-container">
      <div className="issued-header">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="issued-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="issued-btn">Filter ⬇</button>
        <button className="issued-btn">Export ⬇</button>
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
              <th>Status</th> {/* Status like "Issued" from backend */}
            </tr>
          </thead>
          <tbody>
            {filteredIssued.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.contact}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>{item.status}</td> {/* Display backend status */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Issued;
