import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../../Contexts/CartContextProvider";
import { useFav } from "../../../Contexts/FavContextProvider";
import "../OneProduct/OneProduct.css";
import { Link, useNavigate } from "react-router-dom";
// import StarsIcon from "@mui/icons-material/Stars";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useAuth } from "../../../Contexts/AuthContextProvider";
import { useProductContext } from "../../../Contexts/ProductContextProvider";

export default function OneProduct({ item }) {
  const { addDelCart, isProdInCart } = useCart();
  const [inCart, setInCart] = React.useState(isProdInCart(item.id));

  const { addDelFav, isProdInFav } = useFav();
  const [inFav, setInFav] = React.useState(isProdInFav(item.id));
  const { currentUser } = useAuth();

  const { saveEditedProd } = useProductContext();
  const navigate = useNavigate();

  const likeAdd = (item) => {
    // console.log(item);
    if (item.like.includes(currentUser.user)) {
      // console.log(true);
      const liked = item.like.filter((item) => item !== currentUser.user);
      console.log(true);
      let obj = {
        ...item,
        like: liked,
      };
      saveEditedProd(obj);
    } else {
      // console.log(false);
      const arr = item.like;
      // console.log(arr);
      arr.push(currentUser.user);
      // console.log(arr);
      let obj = {
        ...item,
        like: arr,
      };
      saveEditedProd(obj);
      // console.log(false);
    }
  };

  return (
    <Grid
      data-aos="fade-down"
      data-aos-delay="250"
      item
      xs={12}
      sm={6}
      md={6}
      lg={6}
    >
      <Card className="card" sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="350"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="green">
            KGS {item.price}
          </Typography>
          <Typography variant="body1">Type: {item.type}</Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            color={inCart ? "success" : "inherit"}
            onClick={() => {
              addDelCart(item);
              setInCart(isProdInCart(item.id));
            }}
          >
            <ShoppingCartIcon />
          </IconButton>

          <IconButton
            color={inFav ? "error" : "inherit"}
            onClick={() => {
              addDelFav(item);
              setInFav(isProdInFav(item.id));
            }}
          >
            <BookmarkIcon />
          </IconButton>

          {currentUser.isLogged ? (
            <IconButton
              color={item.like.includes(currentUser.user) ? "error" : "inherit"}
              onClick={() => likeAdd(item)}
            >
              <FavoriteIcon /> {item.like.length}
            </IconButton>
          ) : (
            <IconButton>
              <FavoriteIcon onClick={() => navigate("/login")} />
              {item.like.length}
            </IconButton>
          )}

          <Button component={Link} to={`detail/${item.id}`} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
