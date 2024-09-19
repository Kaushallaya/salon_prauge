import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import BannerImage2 from "../assets/images/banner.jpg"

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "left",
  width: "100%",
  height: 600,
  padding: "0px 0px",
  background: "rgb(230,230,230)",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  backgroundImage: `url(${BannerImage2})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor:"black",
  backgroundSize: "cover",

}));

export const BoxContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    justifyContent: "left",
    width: "100%",
    height: 600,
    padding: "0px 0px",
    background: "linear-gradient( #FFFFFF00, #000000)",
  
  }));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 500,
  padding: "30px",
}));


export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 0.9,
  fontSize: "50px",
  marginTop:"150px",
  marginBottom: "20px",
  marginLeft:"50px",
  fontFamily: "Playfair-Display",
  fontStyle:'normal',
  fontWeight:500,
  color:"#fff",
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',  
    alignItems:'center' ,
    marginLeft:"10px", 
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  letterSpacing: 1.25,
  marginBottom: "3em",
  color:"#fff",
  fontFamily:'Poppins',
  fontSize:"12px",
  fontStyle:'normal',
  width:"600px",
  marginLeft:"50px",
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginLeft:"10px",
    width:"100%",
    marginBottom: "1.5em",
  },
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  padding: "5px 0px",
  color: "#fff",
  borderBlockColor:"#fff",
  borderColor:"#fff",
  fontWeight: "bold",
  width:"150px",
  height:'50px',
  fontSize: "16px",
  marginLeft:"50px",
  [theme.breakpoints.down("sm")]: {
    padding: "5px 0px",
    fontSize: "14px",
    marginLeft:"10px",
  },
}));