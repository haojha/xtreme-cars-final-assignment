import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import bmw from "../../Assets/BMWX7.svg";
import "./Card.scss";
const Card = () => {
  return (
    <div className="card">
      <Paper elevation={4}>
        <img className="car-image" src={bmw} alt="" />
        <div className="card-description-arrow-alignment">
          <div className="card-description">
            <h6>
              <b>BMW X7</b>
            </h6>
            <p>1.15 crore onwards</p>
          </div>
          <Link to="/carDetails/1">
            <img className="arrow-logo" src={arrow} alt="" />
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default Card;
