import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faToolbox,
  faQuestionCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faComments,
} from "@fortawesome/free-regular-svg-icons"; // outline-style (free)

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className={location.pathname === "/AdminHome" ? "active" : ""}>
            <Link to="/AdminHome">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className={location.pathname === "/sensorkit" ? "active" : ""}>
            <Link to="/sensorkit">
              <FontAwesomeIcon icon={faToolbox} /> Sensor Kit Management
            </Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faComments} /> FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <button className="logout-button">
        <FontAwesomeIcon icon={faRightFromBracket} /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
