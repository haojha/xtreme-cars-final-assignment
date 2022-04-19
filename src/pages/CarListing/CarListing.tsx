import { Tab, Tabs } from "@mui/material";
import React from "react";
import Card from "../../components/Card/Card";
import "./CarListing.scss";
const CarListing = () => {
  let a = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];
  return (
    <div className="car-listing">
      <div className="tabs">
        <Tabs
          id="tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "yellow",
            },
          }}
        >
          <Tab id="view-all-tab" value="one" label="View All" />
          <Tab id="tab1" value="two" label="Sedan" />
          <Tab id="tab1" value="three" label="SUV" />
          <Tab id="tab1" value="three" label="Hatchback" />
          <Tab id="tab1" value="three" label="Coupe" />
        </Tabs>
      </div>
      <h6>
        <b>48 Total Results</b>
        <div className="cards-list">
          {a.map((el: any) => {
            return <Card />;
          })}
        </div>
      </h6>
    </div>
  );
};

export default CarListing;
