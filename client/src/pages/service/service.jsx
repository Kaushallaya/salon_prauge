import React from "react";
import { Box } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/service";
import { useNavigate, useLocation } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle variant="h2">{location.state.name}</BannerTitle>

        <BannerDescription variant="subtitle">
          At Prauge we are passionate about making people feel good while
          looking their best. Attending advanced education allows us to keep up
          with the latest trends and provide each guest with a unique
          customizable result. For your convenience, Schedule your reservation
          today!{" "}
        </BannerDescription>

        <BannerShopButton
          color="primary"
          variant="contained"
          onClick={() =>
            navigate("/booking", {
              state: {
                id: `${location.state.id}`,
                name: `${location.state.name}`,
                img: `${location.state.img}`,
              },
            })
          }
        >
          Make a Reservation
        </BannerShopButton>
      </BannerContent>
      <Box sx={{ flexGrow: 1 }} />
      <BannerImage src={location.state.img} />
    </BannerContainer>
  );
};

export default Service;
