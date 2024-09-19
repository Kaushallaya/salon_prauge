import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import footerImg from "../assets/images/footer.jpg";
import "@fontsource/poppins";

export const FooterContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: 500,
  marginTop: "50px",
  background: "rgb(230,230,230)",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  backgroundImage: `url(${footerImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "black",
  backgroundSize: "cover",
}));

export const BoxContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: 500,
  background: "#FFF5F1e9",
  //background: "linear-gradient( #FeFFFF10, #000000)",
}));

export const FooterContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 800,
  padding: "30px",
}));

export const FooterTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: "99%",
  fontSize: "50px",
  marginBottom: "20px",
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

export const FooterDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  letterSpacing: 1.25,
  marginBottom: "3em",
  textAlign: "center",
  fontFamily: "Poppins",
  color: "#000000",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  width: 800,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginLeft: "10px",
    width: "100%",
    marginBottom: "1.5em",
  },
}));

export const FooterSubDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  textAlign: "center",
  color: "#B99A5F",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  width: 800,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginLeft: "10px",
    width: "100%",
    marginBottom: "1.5em",
  },
}));
