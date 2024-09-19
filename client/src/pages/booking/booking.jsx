import React from "react";
import { Box } from "@mui/material";
import {
  BannerImage,
  BannerContainer,
  BannerContent,
} from "../../styles/booking";
import BookingForms from "./forms";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const servId = location.state.id == null ? 0 : location.state.id;

  return (
    <BannerContainer>
      <BannerContent>
        <BookingForms serviceId={servId} />
      </BannerContent>
      <Box sx={{ flexGrow: 1 }} />
      <BannerImage src={location.state.img} />
    </BannerContainer>
  );
};

export default Booking;
