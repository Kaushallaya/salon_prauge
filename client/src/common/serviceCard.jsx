import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ src, title, id }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, m: "30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            fontSize="25px"
            fontWeight={500}
            fontFamily="Poppins"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="Poppins"
          >
            Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod
            tempor incididunt ut.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          onClick={() =>
            navigate("/service", {
              state: { id: `${id}`, name: `${title}`, img: `${src}` },
            })
          }
          variant="text"
          fontFamily="Poppins"
          sx={{ color: "#B99A5F" }}
        >
          MAKE A RESERVATION
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
