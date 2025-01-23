import React from "react";
import "../styles/TopBar.css";
import { FaMapMarkerAlt, FaEnvelope, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <div className="top-bar-item">
          <FaMapMarkerAlt className="top-bar-icon" />
          <span>St Johns Church Road, Bengaluru - 560005</span>
        </div>
        <div className="top-bar-item">
          <FaEnvelope className="top-bar-icon" />
          <span>info@guardianenviro.co.in</span>
        </div>
      </div>
      <div className="top-bar-right">
        {/* <h1>9980993104</h1> */}
      </div>
    </div>
  );
};

export default TopBar;
