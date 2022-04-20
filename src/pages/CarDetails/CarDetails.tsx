import React from "react";
import { Link, useParams } from "react-router-dom";
import brown from "../../Assets/brown.svg";
import finish1 from "../../Assets/finish1.svg";
import finish2 from "../../Assets/finish2.svg";
import progress1 from "../../Assets/Progressbar1.svg";
import progress2 from "../../Assets/Progressbar2.svg";
import progress3 from "../../Assets/Progressbar3.svg";
import image1 from "../../Assets/section1.svg";
import image2 from "../../Assets/section2.svg";
import white from "../../Assets/white.svg";
import ButtonComponent from "../../components/Button/ButtonComponent";
import "./CarDetails.scss";

const CarDetails = () => {
  let { carId } = useParams();
  console.log("carId", carId);
  return (
    <div className="car-details">
      <div className="heading">
        <h2>
          <b>BMW X5</b>
        </h2>
        <h2>
          Car <b>Specifications</b>
        </h2>
      </div>
      <div className="sections">
        <div className="section1">
          <div className="progress-bar">
            <img src={progress1}></img>
          </div>
          <div className="section-image">
            <img src={image1} alt="" />
          </div>
          <div className="specs1">
            <div className="spec">
              <p>Fuel type</p>
              <h5>
                <b>Petrol and Diesel</b>
              </h5>
            </div>

            <div className="spec">
              <p>Engine</p>
              <h5>
                <b>2993 to 2998 C</b>
              </h5>
            </div>
            <div className="spec">
              <p>Torque</p>
              <h5>
                <b>450 to 620 Nm</b>
              </h5>
            </div>
            <div className="spec">
              <p>Acceleration</p>
              <h5>
                <b>5.5 to 6.5 seconds</b>
              </h5>
            </div>
            <div className="spec">
              <p>Top Speed</p>
              <h5>
                <b>230 to 243 kmph</b>
              </h5>
            </div>
            <div className="spec">
              <p>Variants</p>
              <h5>
                <b>
                  The BMW X5 comes in four distinctive trims starting with the
                  entry-level X5 xDrive40i SportX Plus, xDrive30d SportX Plus,
                  xDrive30d Luxury Line and xDrive40i M Sport.
                </b>
              </h5>
            </div>
          </div>
        </div>
        <div className="section2 section1">
          <div className="progress-bar">
            <img src={progress2}></img>
          </div>
          <div className="section-image">
            <img src={image2} alt="" />
          </div>
          <div className="specs1 specs-space-between">
            <h3>
              <b>Exteriors</b>
            </h3>
            <img src={white} alt="" />
            <div className="spec">
              <p>Exteriors</p>
              <h5>
                <b>
                  This mid-size SUV measures 4,922mm in length and has a 2,975mm
                  wheelbase. Besides, BMW has given it a one-piece kidney grille
                  with flashy chrome trimming and large air inlets in the front
                  bumper.{" "}
                </b>
              </h5>
            </div>
          </div>
        </div>
        <div className="section3 section1">
          <div className="progress-bar">
            <img src={progress3}></img>
          </div>
          <div className="section-image">
            <img src={finish1} alt="" />
            <img src={finish2} alt="" />
          </div>
          <div className="specs1 specs-space-between">
            <p>
              <b>Interior Finishes</b>
              <div>
                <img src={brown} alt="" />
              </div>

              <div className="points">
                <ul>
                  <li>X5 has a high-end cockpit</li>
                  <li>Vernasca leather upholstery for the seats</li>
                  <li>A panoramic sunroof </li>
                  <li>Four-zone temperature control</li>
                  <li>BMW display key</li>
                  <li>heads-up display, parking and reversing assistance</li>
                  <li>Surround-view cameras and attentiveness attention. </li>
                </ul>
              </div>
              <div className="cost">
                <h3>Cost</h3>
                <h3>75 Lakhs</h3>
              </div>
              <div className="book-now-button">
                <Link className="link-decoration" to="/carBooking">
                  <ButtonComponent buttonText="BOOK NOW"></ButtonComponent>
                </Link>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
