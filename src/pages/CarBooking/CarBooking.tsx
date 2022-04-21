import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import smallBmw from "../../Assets/smallBmw.svg";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { RootState } from "../../Redux/Store/configureStore";
import { GET_CAR_DETAILS_BY_ID } from "../../Redux/Store/reducers/carsReducer";
import "./CarBooking.scss";
const CarBooking = () => {
  let cities = [
    { city: "Lucknow" },
    { city: "Jaipur" },
    { city: "Delhi" },
    { city: "Bangalore" },
  ];
  // const location = useLocation();
  // const { carDetail }: any = location.state;
  // console.log(carDetail);
  let { carId } = useParams();
  const carDetail = useSelector((state: RootState) => state.cars.carDetail);
  console.log("carId", carId);
  console.log("car detail", carDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("car detail dispatch");
    dispatch({ type: GET_CAR_DETAILS_BY_ID, carId: carId });
  }, []);
  return (
    <div className="car-details">
      <div className="car-details-parent">
        <div className="car-description">
          <h2>
            Car <b>Details</b>
          </h2>
          <img src={smallBmw} alt="" />
          <h3>
            <b>{carDetail?.specifications?.name}</b>
          </h3>

          <p>Fuel type</p>
          <h5>
            <b>{carDetail?.specifications?.fuel_type}</b>
          </h5>

          <p>Engine</p>
          <h5>
            <b>{carDetail?.specifications?.engine_cc}</b>
          </h5>

          <div className="view-all-with-icon-alignment">
            <NavLink className="view-all-link" to={`/carDetails/${carId}`}>
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
