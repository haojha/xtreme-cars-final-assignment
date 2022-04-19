import React from "react";
import bookingPageCar from "../../Assets/bookingPageCar.svg";
import smallBmw from "../../Assets/smallBmw.svg";
import "./Confirmation.scss";
const Confirmation = () => {
  return (
    <div className="confirmation">
      <div className="confirmation-parent">
        <div className="box1">
          <img className="small-car" src={smallBmw} alt="" />
          <h2>
            Booking <b>Successful</b>
          </h2>
          <h5>Download the booking summary</h5>
        </div>
        <div className="box2">
          <div className="image-box">
            <img src={bookingPageCar} alt="" />
          </div>
          <div className="explore-more">
            <div className="white-border-box">
              <h4 className="explore">Explore more</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
