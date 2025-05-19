import React, { useEffect, useState } from "react";
import "./overview.css";

const KitManagement = () => {
  const [stats, setStats] = useState({
    totalIssued: 0,
    totalPending: 0,
    totalReturned: 0,
    totalAvailable: 0,
  });

  const [kitData, setKitData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace these URLs with your actual backend endpoints
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/kits/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching kit stats:", error);
      }
    };

    const fetchKitData = async () => {
      try {
        const response = await fetch("/api/kits/recent");
        const data = await response.json();
        setKitData(data);
      } catch (error) {
        console.error("Error fetching kit data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    fetchKitData();
  }, []);

  return (
    <main className="kit-management-main">
      {/* 🔹 Statistics Section */}
      <div className="stats">
        <div className="stat-box">
          <p>Total Kits Issued <span className="info-icon">ℹ️</span></p>
          <h2>{stats.totalIssued}</h2>
        </div>
        <div className="stat-box">
          <p>Total Pending Request <span className="info-icon">😊</span></p>
          <h2>{stats.totalPending}</h2>
        </div>
        <div className="stat-box">
          <p>Total Kits Returned <span className="info-icon">↩️</span></p>
          <h2 className="red-text">{stats.totalReturned}</h2>
        </div>
        <div className="stat-box">
          <p>Available Kits <span className="info-icon">📦</span></p>
          <h2>{stats.totalAvailable}</h2>
        </div>
      </div>

      {/* 🔹 Recent Kits Table */}
      <h3 className="recent-title">Recent</h3>
      <div className="table-container">
        <div className="table-controls">
          <input type="text" placeholder="🔍 Search" className="search-input" />
          <button className="filter-btn">Filter ⬇</button>
          <button className="export-btn">Export ⬇</button>
        </div>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <table className="kit-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Kit ID</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {kitData.map((item, index) => (
                <tr key={item._id || index}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.kitId}</td>
                  <td className={item.status.toLowerCase()}>{item.status}</td>
                  <td>{item.date}</td>
                  <td className="button-container">
                    <button className="view-btn">View</button>
                    <button className="update-btn">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
};

export default KitManagement;
