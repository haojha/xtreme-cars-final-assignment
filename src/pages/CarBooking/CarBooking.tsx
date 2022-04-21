import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  let { carId } = useParams();
  const carDetail = useSelector((state: RootState) => state.cars.carDetail);
  console.log("carId", carId);
  console.log("car detail", carDetail);
  const dispatch = useDispatch();

  const nameText = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("car detail dispatch");
    dispatch({ type: GET_CAR_DETAILS_BY_ID, carId: carId });
  }, []);
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("false");

  const [formErrors, setFormErrors] = useState<{
    nameError: string | null;
    contactError: string | null;
    cityError: string | null;
    checkBoxError: string | null;
  }>({
    nameError: null,
    contactError: null,
    cityError: null,
    checkBoxError: null,
  });
  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
    console.log(city);
  };

  useEffect(() => {
    if (
      formErrors.nameError === "" &&
      formErrors.cityError === "" &&
      formErrors.checkBoxError === "" &&
      formErrors.contactError === ""
    )
      navigate("/confirmation");
  }, [formErrors]);

  const handleSubmit = (event: React.FormEvent) => {
    console.log(name, contact, city, status);
    setFormErrors(validate(name, +contact, city, status));

    event.preventDefault();
  };

  const validate = (name: any, contact: any, city: any, status: any) => {
    const errors = {
      nameError: "",
      contactError: "",
      cityError: "",
      checkBoxError: "",
    };
    let letters = /^[A-Za-z]+$/;
    if (!name.replaceAll(" ", "").match(letters)) {
      errors.nameError = "enter a valid name";
    }
    if (isNaN(contact) || contact <= 0) {
      errors.contactError = "Contact should be number";
    }
    if (city === "") {
      errors.cityError = "Select a city";
    }
    if (status === "false")
      errors.checkBoxError = "Accepting terms and conditions is mandatory";
    console.log(errors);
    return errors;
  };

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
          <form onSubmit={handleSubmit}>
            <Typography variant="subtitle1">Name</Typography>
            <div className="field-width">
              <TextField
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                fullWidth
                id="outlined-basic"
                label="Enter your name "
                variant="outlined"
                value={name}
              />
            </div>
            <div className="error">{formErrors.nameError}</div>

            <Typography variant="subtitle1">Contact Number</Typography>
            <div className="field-width">
              <TextField
                onChange={(e: any) => {
                  setContact(e.target.value);
                  console.log(contact);
                }}
                fullWidth
                id="outlined-basic"
                label="Enter your Contact No "
                variant="outlined"
              />
            </div>
            <div className="error">{formErrors.contactError}</div>

            <Typography variant="subtitle1">City</Typography>
            <div className="field-width">
              <Select
                fullWidth
                value={city}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="Lucknow">Lucknow</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Pune">Pune</MenuItem>
              </Select>
            </div>
            <div className="error">{formErrors.cityError}</div>

            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    console.log(e);
                    setStatus(e.target.checked.toString());
                  }}
                />
              }
              label="I accept the terms and conditions"
            />
            <div className="error">{formErrors.checkBoxError}</div>
            <div className="terms-and-condition">
              <h6>
                <b>Terms and conditions:</b>
              </h6>
            </div>

            <Typography variant="caption">
              *Terms and conditions apply. All offers are from dealers. Please
              get in touch with your nearest dealer for detailed terms and
              conditions. All taxes are additional. Offer valid till February
              15, 2022 and is subject to change without prior notice.
              Calculations for the following are for a specific tenure mileage
              and finance amount.{" "}
            </Typography>
            <div className="submit-button">
              <ButtonComponent submitButton="true" buttonText="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarBooking;
