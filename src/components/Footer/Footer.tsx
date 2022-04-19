import React from "react";
import fb from "../../Assets/fb.svg";
import insta from "../../Assets/insta.svg";
import twitter from "../../Assets/twitter.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-nav">
      <div className="contact colum">
        <h5>
          <b>Contact</b>
        </h5>
        <p>Request a Test Drive</p>
        <p>Book Car</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div className="xtremecars colum">
        <h5>
          <b>Xtremecars:</b>
        </h5>
        <p>
          12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai -
          400705. Maharashtra, India.
        </p>
        <p>Phone: +91 (22) 612 800000</p>
      </div>
      <div className="legal colum">
        <h5>
          <b>Legal</b>
        </h5>
        <p>Legal Disclaimer/Imprint</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <div className="connect-with-us colum">
        <h5>
          <b>Connect with us</b>
        </h5>
        <img
          style={{ backgroundColor: "black" }}
          className="footer-logo"
          src={fb}
          alt="Logo"
        />
        <img
          style={{ backgroundColor: "black" }}
          className="footer-logo"
          src={twitter}
          alt="Logo"
        />
        <img
          style={{ backgroundColor: "black" }}
          className="footer-logo"
          src={insta}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
