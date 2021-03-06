import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CarBooking from "./pages/CarBooking/CarBooking";
import CarDetails from "./pages/CarDetails/CarDetails";
import CarListing from "./pages/CarListing/CarListing";
import Confirmation from "./pages/Confirmation/Confirmation";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header-nav">
          <Header />
        </div>
        <div className="patch"></div>
        <div className="background">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/carListing" element={<CarListing />}></Route>
            <Route path="/carDetails/:carId" element={<CarDetails />}></Route>
            <Route path="/carBooking/:carId" element={<CarBooking />}></Route>
            <Route path="/confirmation" element={<Confirmation />}></Route>
          </Routes>
        </div>

        <div className="footer-nav">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
