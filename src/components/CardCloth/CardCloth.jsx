import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardCloth.css";
import { Link } from "react-router-dom";
import bal1 from "../img/bal1.jpeg";
import bal2 from "../img/bal2.jpeg";
import bal3 from "../img/bal3.jpeg";
import bal4 from "../img/bal4.jpeg";

export default function ActionAreaCard() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="150"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Card
        style={{ textDecoration: "none" }}
        component={Link}
        to="/products/detail/5"
        className="wrapper-img"
        sx={{ maxWidth: 800 }}
      >
        <CardActionArea>
          <CardMedia
            className="card-img"
            component="img"
            height="500"
            image={bal1}
            alt="t-shirt"
          />
          <CardMedia
            className="img-hide card-img"
            component="img"
            height="500"
            image={bal2}
            alt="t-shirt"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Balenciaga
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        style={{ textDecoration: "none" }}
        component={Link}
        to="/products/detail/6"
        className="wrapper-img"
        sx={{ maxWidth: 800 }}
      >
        <CardActionArea>
          <CardMedia
            className="card-img"
            component="img"
            height="500"
            image={bal3}
            alt="t-shirt"
          />
          <CardMedia
            className="img-hide card-img"
            component="img"
            height="500"
            image={bal4}
            alt="t-shirt"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Balenciaga
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    // <div className="section">
    // <div className="wrapper-img">
    //   <img
    //     className="card-img"
    //     src="https://balenciaga.dam.kering.com/m/2116182bc8429c0a/eCom-651795TKVB89040_F.jpg?v=1"
    //     alt=""
    //   />
    //   <img
    //     className="img-hide card-img"
    //     src="https://balenciaga.dam.kering.com/m/7d147fa9535a958a/eCom-651795TKVB89040_G.jpg?v=1"
    //     alt=""
    //   />
    // </div>
    // </div>
  );
}
