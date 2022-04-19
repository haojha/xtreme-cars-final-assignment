import { Tab, Tabs } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import Card from "../../components/Card/Card";
import "./Dashboard.scss";
const Dashboard = () => {
  let a = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div className="dashboard">
      <div className="carousel">
        <h1>Carousel</h1>
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
