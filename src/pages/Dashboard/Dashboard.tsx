import { Tab, Tabs, TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import carousel1 from "../../Assets/carousel1.svg";
import carousel2 from "../../Assets/carousel2.svg";
import carousel3 from "../../Assets/carousel3.svg";
import carousel4 from "../../Assets/carousel4.svg";
import left from "../../Assets/left.svg";
import right from "../../Assets/right.svg";
import ButtonComponent from "../../components/Button/ButtonComponent";
import Card from "../../components/Card/Card";
import "./Dashboard.scss";

const Dashboard = () => {
  let a = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  let i = 0;
  let background_images = [carousel1, carousel2, carousel3, carousel4];
  const [image, setImage] = useState(0);
  return (
    <div className="dashboard">
      <div className="carousel">
        <div
          className="caro"
          style={{
            backgroundImage: `url(${background_images[image]})`,
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5",
          }}
        >
          <div className="carousel-child">
            <h1 className="dream-car-heading">FIND YOUR DREAM CAR</h1>
            <div className="arrows">
              <img
                onClick={() => {
                  console.log(image);
                  console.log("left");
                  setImage((prev_img) => Math.abs(prev_img - 1) % 4);
                }}
                src={left}
              ></img>
              <img
                onClick={() => {
                  console.log(image);
                  console.log("right");
                  setImage((prev_img) => Math.abs(prev_img + 1) % 4);
                }}
                src={right}
              ></img>
            </div>

            <div className="field-with-button">
              <div className="field-width-search">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Enter car name... "
                  variant="outlined"
                />
              </div>
              <div className="search-button">
                <ButtonComponent buttonText="Search"></ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-cars">
        <h5>
          Featured <b>Cars</b>
        </h5>
        <div className="featured-cars-heading">
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab id="popular" value="one" label="Popular" />
            <Tab id="tab1" value="two" label="Just Launched" />
            <Tab id="tab1" value="three" label="Upcoming" />
          </Tabs>

          <div className="view-all-with-icon">
            <NavLink className="view-all-link" to="/carListing">
              <h6>View all</h6>
            </NavLink>
            <NavLink to="/carListing">
              <img className="arrow-logo" src={arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="card-list">
          {a.map((el: any) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
