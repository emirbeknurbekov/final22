import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../Contexts/CartContextProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../pagesCSS/Cart.css";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

const Cart = () => {
  const { cart, getCart, changeProductCount, deleteProdInCart } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <Container>
        <h1 className="cart-title">BAG</h1>
        {cart.products.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      Type
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Image
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Price
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      SubPrice
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Count
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.products.map((elem) => (
                    <TableRow
                      key={elem.item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {elem.item.title}
                      </TableCell>
                      <TableCell align="center">{elem.item.type}</TableCell>
                      <TableCell align="right">
                        <img
                          width="40px"
                          src={elem.item.img}
                          alt={elem.item.title}
                        />
                      </TableCell>
                      <TableCell align="right">{elem.item.price}</TableCell>
                      <TableCell align="right">{elem.subPrice}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() =>
                            changeProductCount(elem.count + 1, elem.item.id)
                          }
                        >
                          <AddIcon />
                        </IconButton>

                        {elem.count}

                        <IconButton
                          onClick={() => {
                            elem.count > 0
                              ? changeProductCount(elem.count - 1, elem.item.id)
                              : deleteProdInCart(elem.item.id);
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => deleteProdInCart(elem.item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="price-order">
              <Typography variant="h5">
                Total price: ${cart.totalPrice}
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/credit">
                  <Button variant="contained">
                    Order now for ${cart.totalPrice}
                  </Button>
                </NavLink>
              </Typography>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <RemoveShoppingCartOutlinedIcon
              color="action"
              sx={{ fontSize: 100 }}
            />
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

export default Cart;
