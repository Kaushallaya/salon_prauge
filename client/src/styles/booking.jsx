import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 600,
  height: 600,
  paddingRight: "10px",
  paddingLeft: "100px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "20px",
    padding: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    maxWidth: 100,
    width: 100,
    minWidth: 100,
  },
}));

export const FormBox = styled(Box)(({ theme }) => ({
  padding: "0px 50px",
  width: "450px",
  "& > :not(style)": { marginBottom: 10, marginRight: 5 },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "750px",
  maxWidth: "1000px",
  minWidth: "500px",
  justifyContent: "right",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "300px",
    justifyContent: "center",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.5,
  fontSize: "50px",
  marginBottom: "10px",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  marginTop: "50px",
  fontFamily: "Playfair-Display",
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
    marginTop: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerSubTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 0.9,
  letterSpacing: "-0.03em",
  paddingTop: "35px",
  marginBottom: "10px",
  marginRight: "20px",
  fontFamily: "Poppins",
  fontSize: "25px",
  fontStyle: "normal",
  fontWeight: 800,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "10px",
  },
}));

export const BannerPaidButton = styled(Button)(({ theme }) => ({
  padding: "10px 0px",
  color: "#ffffff",
  backgroundColor: "#B99A5F ",
  width: "100px",
  fontSize: "10px",
  "&:hover": {
    backgroundColor: "#B99A5A",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));
