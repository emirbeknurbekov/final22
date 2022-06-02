import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useFav } from "../Contexts/FavContextProvider";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const Fav = () => {
  const { fav, getFav, deleteProdInFav } = useFav();

  useEffect(() => {
    getFav();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="fav-title">
        Wishlist
      </h1>
      <br />
      <NavLink
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        to="/products"
      >
        <Button style={{}} variant="contained">
          Go to shop
        </Button>
      </NavLink>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {fav.products.length > 0 ? (
          <>
            {fav.products.map((elem) => (
              <Card style={{ margin: "10px 0" }} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={elem.item.img}
                  alt={elem.item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.item.type}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton onClick={() => deleteProdInFav(elem.item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <Button
                    component={Link}
                    to={`/products/detail/${elem.item.id}`}
                    size="small"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <HeartBrokenIcon color="action" sx={{ fontSize: 100 }} />
            <br />
            <br />
            <Button variant="contained" component={Link} to="/products">
              Return to shop
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Fav;
