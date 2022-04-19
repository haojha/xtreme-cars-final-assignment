import React from "react";
import carLogo from "../../Assets/XTREMECARS LOGO.svg";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header_nav">
      <div className="xtreme-car-logo-with-name">
        <img className="xtreme-car-logo" src={carLogo} alt="Car Logo" />
        <h3>XTREMECARS</h3>
      </div>
      <div className="new-used-cars-links">
        <h4>NEW CARS</h4>
        <h4>USED CARS</h4>
      </div>
      <h4>MY PROFILE</h4>
    </div>
  );
};

export default Header;
