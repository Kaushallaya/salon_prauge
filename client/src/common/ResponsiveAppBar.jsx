import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";
import Blogo from "../assets/brand/logo_black.png";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import card1 from "../assets/images/card1_img.png";

const Logo = styled("img")(() => ({
  width: "12rem",
  minWidth: "4rem",
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "#000000",
  padding: "0px 40px",
}));

const pages = ["Home", "About", "Service", "shop"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ height: "100px", backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ marginTop: "15px", padding: "0px 50px" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <HashLink
                      style={{ textDecoration: "none", color: "black" }}
                      to={`#${page}`}
                    >
                      {page}
                    </HashLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo src={Blogo} alt="Logo" sx={{ mr: 2 }} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: "black", display: "block" }}
              >
                <HashLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={`#${page}`}
                >
                  {page}
                </HashLink>
              </Button>
            ))}
            <ColorButton
              onClick={() =>
                navigate("/booking", {
                  state: {
                    id: null,
                    img: `${card1}`,
                  },
                })
              }
              sx={{
                my: 1,
                mx: 1,
                color: "white",
                display: "block",
                "&:hover": {
                  backgroundColor: "#839192",
                },
              }}
            >
              Book now
            </ColorButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
