import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import smallBmw from "../../Assets/smallBmw.svg";
import ButtonComponent from "../../components/Button/ButtonComponent";
import "./CarBooking.scss";
const CarBooking = () => {
  let cities = [
    { city: "Lucknow" },
    { city: "Jaipur" },
    { city: "Delhi" },
    { city: "Bangalore" },
  ];
  return (
    <div className="car-details">
      <div className="car-details-parent">
        <div className="car-description">
          <h2>
            Car <b>Details</b>
          </h2>
          <img src={smallBmw} alt="" />
          <h3>
            <b>BMW X5</b>
          </h3>

          <p>Fuel type</p>
          <h5>
            <b>Petrol and Diesel</b>
          </h5>

          <p>Engine</p>
          <h5>
            <b>2993 to 2998 C</b>
          </h5>

          <div className="view-all-with-icon-alignment">
            <NavLink className="view-all-link" to="/carListing">
              <h6>View all Details</h6>
            </NavLink>
            <NavLink to="/carListing">
              <img className="arrow-logo" src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="booking-details">
          <h2>
            Booking <b>Details</b>
          </h2>
          <Typography variant="subtitle1">Name</Typography>
          <div className="field-width">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Enter your name "
              variant="outlined"
            />
          </div>

          <Typography variant="subtitle1">Contact Number</Typography>
          <div className="field-width">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Enter your Contact No "
              variant="outlined"
            />
          </div>

          <Typography variant="subtitle1">City</Typography>
          <div className="field-width">
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Select a city"
            >
              {cities.map((city) => (
                <MenuItem>{city.city}</MenuItem>
              ))}
            </TextField>
          </div>

          <FormControlLabel
            control={<Checkbox />}
            label="I accept the terms and conditions"
          />
          <div className="terms-and-condition">
            <h6>
              <b>Terms and conditions:</b>
            </h6>
          </div>

          <Typography variant="caption">
            *Terms and conditions apply. All offers are from dealers. Please get
            in touch with your nearest dealer for detailed terms and conditions.
            All taxes are additional. Offer valid till February 15, 2022 and is
            subject to change without prior notice. Calculations for the
            following are for a specific tenure mileage and finance amount.{" "}
          </Typography>
          <div className="submit-button">
            <Link className="button-link-submit" to="/confirmation">
              <ButtonComponent buttonText="Submit" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBooking;
