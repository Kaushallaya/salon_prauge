import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./common/ResponsiveAppBar.jsx";
import Booking from "./pages/booking/booking.jsx";
import Confirm from "./pages/confirmation/confirm.jsx";
import Home from "./pages/home/index.jsx";
import Service from "./pages/service/service.jsx";
import StripeGateway from "./test/stripe.jsx";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      {/* <Home/> */}
      {/* <Service/> */}
      {/* <Booking/> */}
      {/* <Confirm/> */}
      {/* <Forms/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/confirm" element={<Confirm />}></Route>
        <Route path="/stripe" element={<StripeGateway />}></Route>
      </Routes>
    </>
  );
};

export default App;
