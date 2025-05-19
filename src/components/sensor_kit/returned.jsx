import React, { useEffect, useState } from "react";
import axios from "axios";
import "./returned.css";

const Returned = () => {
  const [returnedData, setReturnedData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchReturnedData();
  }, []);

  const fetchReturnedData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/kits/returned"); // replace with your backend URL
      setReturnedData(response.data);
    } catch (error) {
      console.error("Error fetching returned kits:", error);
    }
  };

  const filteredReturned = returnedData.filter((item) =>
    item.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="returned-container">
      <div className="returned-header">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="returned-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="returned-btn">Filter ⬇</button>
        <button className="returned-btn">Export ⬇</button>
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
              <th>Status</th> {/* Status like "Returned", "Damaged", etc. */}
            </tr>
          </thead>
          <tbody>
            {filteredReturned.map((item, index) => (
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

export default Returned;
