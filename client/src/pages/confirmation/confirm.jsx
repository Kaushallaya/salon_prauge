import React from "react";
import {
  ConfirmContainer,
  ConfirmTitle,
  ConfirmDescription,
  ConfirmSubTitle,
  ContactAvatar,
} from "../../styles/confirm";
import CallIcon from "@mui/icons-material/PhoneInTalkOutlined";

const Confirm = () => {
  return (
    <ConfirmContainer>
      <ConfirmTitle>Thank you for your reservation!</ConfirmTitle>
      <ConfirmDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </ConfirmDescription>

      <ConfirmSubTitle color={"#B99A5F"}>
        {" "}
        For further information contact us
      </ConfirmSubTitle>
      <ContactAvatar>
        <CallIcon sx={{ color: "black" }} />
      </ContactAvatar>
      <ConfirmSubTitle color={"#A5A5A5"}> (487) 1070 1087</ConfirmSubTitle>
      <ConfirmSubTitle color={"#A5A5A5"}>
        {" "}
        sales.salonprauge@sp.com
      </ConfirmSubTitle>
    </ConfirmContainer>
  );
};

export default Confirm;
