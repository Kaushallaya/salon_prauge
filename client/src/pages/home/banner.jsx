import React from "react";
import {
  BannerContainer,
  BoxContainer,
  BannerContent,
  BannerDescription,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
import { useNavigate } from "react-router-dom";
import card1 from "../../assets/images/card1_img.png";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <BannerContainer>
      <BoxContainer>
        <BannerContent>
          <BannerTitle variant="h2">
            Always make room for beauty in your life
          </BannerTitle>

          <BannerDescription variant="subtitle">
            At Prauge we are passionate about making people feel good while
            looking their best. Attending advanced education allows us to keep
            up with the latest trends and provide each guest with a unique
            customizable result. For your convenience, Schedule your reservation
            today!
          </BannerDescription>

          <BannerShopButton
            color="primary"
            variant="outlined"
            onClick={() =>
              navigate("/booking", {
                state: {
                  id: null,
                  img: `${card1}`,
                },
              })
            }
          >
            Book Now
          </BannerShopButton>
        </BannerContent>
      </BoxContainer>
    </BannerContainer>
  );
};

export default Banner;
