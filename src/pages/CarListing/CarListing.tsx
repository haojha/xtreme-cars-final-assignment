import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { RootState } from "../../Redux/Store/configureStore";
import {
  GET_ALL_CARS,
  GET_ALL_CARS_BY_TYPE,
} from "../../Redux/Store/reducers/carsReducer";
import "./CarListing.scss";

const CarListing = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.cars.cars);
  // const [cars_State, cars_SetCars] = useState(cars);
  console.log(cars);
  const [selectedTab, setSelectedTab] = useState("View All");

  useEffect(() => {
    console.log("Dashboard");
    dispatch({ type: GET_ALL_CARS });
  }, []);

  const getCarsByTypeDispatcher = (carType: string) => {
    console.log(carType);
    dispatch({ type: GET_ALL_CARS_BY_TYPE, carType });
    if (carType === "View All") dispatch({ type: GET_ALL_CARS });
    // cars_SetCars(cars);
  };
  // let a = [
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  //   { id: 4 },
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  //   { id: 4 },
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  //   { id: 4 },
  // ];
  return (
    <div className="car-listing">
      <div className="tabs">
        <Tabs
          id="tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "black",
            },
          }}
        >
          <Tab
            onClick={() => {
              getCarsByTypeDispatcher("View All");
              setSelectedTab("View All");
            }}
            style={{
              backgroundColor: selectedTab === "View All" ? "black" : "white",
              color: selectedTab === "View All" ? "white" : "black",
            }}
            id="view-all-tab"
            value="one"
            label="View All"
          />
          <Tab
            onClick={() => {
              setSelectedTab("sedan");
              console.log("sedan");
              getCarsByTypeDispatcher("sedan");
            }}
            style={{
              backgroundColor: selectedTab === "sedan" ? "black" : "white",
              color: selectedTab === "sedan" ? "white" : "black",
            }}
            id="tab1"
            value="two"
            label="Sedan"
          />
          <Tab
            onClick={() => {
              setSelectedTab("SUV");
              getCarsByTypeDispatcher("SUV");
            }}
            style={{
              backgroundColor: selectedTab === "SUV" ? "black" : "white",
              color: selectedTab === "SUV" ? "white" : "black",
            }}
            id="tab1"
            value="three"
            label="SUV"
          />
          <Tab
            onClick={() => {
              setSelectedTab("hatchback");
              getCarsByTypeDispatcher("hatchback");
            }}
            style={{
              backgroundColor: selectedTab === "hatchback" ? "black" : "white",
              color: selectedTab === "hatchback" ? "white" : "black",
            }}
            id="tab1"
            value="three"
            label="Hatchback"
          />
          <Tab
            onClick={() => {
              setSelectedTab("coupe");
              getCarsByTypeDispatcher("coupe");
            }}
            style={{
              backgroundColor: selectedTab === "coupe" ? "black" : "white",
              color: selectedTab === "coupe" ? "white" : "black",
            }}
            id="tab1"
            value="three"
            label="Coupe"
          />
        </Tabs>
      </div>

      <h6>
        <b>
          {cars?.length > 0 ? cars?.length + " Total Results" : "No Results"}
        </b>
      </h6>
      <div className="cards-list">
        {cars &&
          cars?.map((car: any) => {
            return <Card car={car} />;
          })}
      </div>
    </div>
  );
};

export default CarListing;
