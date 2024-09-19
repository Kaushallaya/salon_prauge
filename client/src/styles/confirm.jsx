import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/poppins";

export const ConfirmContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingTop: 50,
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));

export const ConfirmTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: "99%",
  fontSize: "50px",
  marginBottom: "1em",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  marginTop: "50px",
  fontFamily: "Playfair-Display",
  textAlign: "center",
  color: "#000000",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
    alignItems: "center",
    marginLeft: "10px",
  },
}));

export const ConfirmDescription = styled(Typography)(({ theme, color }) => ({
  lineHeight: 1.5,
  letterSpacing: 1.25,
  textAlign: "center",
  fontFamily: "Poppins",
  color: color,
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 400,
  padding: "10px 300px",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    padding: "10px 30px",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const ConfirmSubTitle = styled(Typography)(({ theme, color }) => ({
  lineHeight: 0.9,
  letterSpacing: "-0.03em",
  textAlign: "center",
  marginTop: "20px",
  fontFamily: "Poppins",
  fontSize: "20px",
  fontStyle: "normal",
  color: color,
  [theme.breakpoints.down("md")]: {
    lineHeight: 0.9,
    letterSpacing: "0em",
  },
}));

export const ContactAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#FCECE5",
  alignContent: "center",
  alignSelf: "center",
  marginTop: "3em",
}));
