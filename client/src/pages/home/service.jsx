import React from "react";
import { Typography, Box } from "@mui/material";

import "../../styles/theme/slick.css";
import "../../styles/theme/slick-theme.css";
import ServiceCarousel from "../../common/carousel";

const Service = () => {
  return (
    <div id="Service">
      <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
        <Typography variant="h3" fontFamily="Playfair-Display" fontWeight={800}>
          Service
        </Typography>
      </Box>
      <ServiceCarousel />
    </div>
  );
};

export default Service;
