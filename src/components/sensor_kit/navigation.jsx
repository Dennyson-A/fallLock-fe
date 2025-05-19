import React from "react";
import "./navigation.css";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

const KitManagement = () => {
  return (
          <div className="tabs">
            <span className="tab active">Overview</span>
            <span className="tab">Request</span>
            <span className="tab">Issued</span>
            <span className="tab">Returned</span>
          </div>
  );
};

export default KitManagement;
