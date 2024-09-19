import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 700,
  padding: "50px",
  paddingLeft: "150px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "80px",
    padding: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "80px",
    paddingLeft: "40px",
    maxWidth: 500,
    width: 300,
    minWidth: 200,
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "750px",
  maxWidth: "800px",
  minWidth: "500px",
  height: "600px",
  justifyContent: "right",
  [theme.breakpoints.down("md")]: {
    width: "350px",
    maxWidth: "450px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50px",
    height: "100%",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
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

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  letterSpacing: 1.5,
  marginBottom: "3em",
  marginRight: "20px",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "1.5em",
  },
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  padding: "15px 0px",
  color: "#ffff",
  backgroundColor: "black ",
  width: "250px",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "#839192",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));
