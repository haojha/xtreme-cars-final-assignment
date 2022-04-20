import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import "./Card.scss";
const Card = ({ car }: any) => {
  return (
    <div className="card">
      <Paper elevation={4}>
        <img className="car-image" src={car.image} alt="" />
        <div className="card-description-arrow-alignment">
          <div className="card-description">
            <h6>
              <b>{car.name}</b>
            </h6>
            <p>{car.price} onwards</p>
          </div>
          <Link to={`/carDetails/${car.id}`}>
            <img className="arrow-logo" src={arrow} alt="" />
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default Card;
