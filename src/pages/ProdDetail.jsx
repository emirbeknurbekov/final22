import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Contexts/ProductContextProvider";
import Spinner from "../components/Spinner/Spinner";
import "../pagesCSS/ProdDetail.css";
import { useUserContext } from "../Contexts/CommentContextProvider";
import { useAuth } from "../Contexts/AuthContextProvider";
import { notify } from "../components/Toastify/Toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, forEditVal } = useProductContext();
  const { addComment, products, getComment, deleteComment } = useUserContext();

  const { currentUser } = useAuth();

  useEffect(() => {
    getComment(prodId);
  });

  const [inpValues, setInpValues] = useState({
    comment: "",
    user: "",
    prodId: prodId,
  });

  useEffect(() => {
    getOneProduct(prodId);
  }, []);

  useEffect(() => {
    setInpValues({
      ...inpValues,
      user: currentUser.user,
    });
  }, [currentUser]);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };

    setInpValues(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inpValues.comment.trim()) {
      notify("error", "Заполните все поля");
      return;
    }
    let obj = {
      ...inpValues,
    };
    addComment(obj);
    setInpValues({
      ...inpValues,
      comment: "",
    });
  };

  return (
    <Container>
      <h1 className="detail-title">DETAILED INFORMATION</h1>
      <div className="prod-detail container">
        <Paper elevation={3} className="paper">
          {forEditVal ? (
            <div>
              <div>
                <img className="img-det" src={forEditVal.img} alt="" />

                <h2>{forEditVal.title}</h2>

                <p>{forEditVal.description}</p>

                <h4>{forEditVal.price} KGS</h4>
              </div>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "50px 0",
                }}
              >
                <Card
                  sx={{
                    maxWidth: 800,
                    border: "1px solid grey",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CardContent>
                    <form onSubmit={(e) => handleSubmit(e)}>
                      {products.map((item) => (
                        <Box
                          key={item.id}
                          style={{
                            borderBottom: "1px solid black",
                            display: "flex",
                            justifyContent: "center",
                            maxWidth: "750px",
                            minWidth: "500px",
                          }}
                        >
                          <div>
                            <IconButton>
                              <PersonIcon fontSize="large" />
                            </IconButton>
                          </div>
                          <div>
                            <p style={{ fontWeight: "bold" }}>{item.user}</p>
                            <p style={{ opacity: "0.6" }}>
                              {new Date().toLocaleString()}
                            </p>
                            <p>{item.comment}</p>
                            {item.user === currentUser.user ? (
                              <IconButton onClick={() => deleteComment(item)}>
                                <DeleteIcon />
                              </IconButton>
                            ) : (
                              ""
                            )}
                          </div>
                        </Box>
                      ))}
                      <TextField
                        name="comment"
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        multiline
                        rows={2}
                        onChange={(e) => handleChange(e)}
                        sx={{ my: 1, maxWidth: "350px" }}
                      />

                      <br />
                      <Button type="submit" variant="contained">
                        Add comment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Box>
            </div>
          ) : (
            <Spinner style={{ textAlign: "center" }} />
          )}
        </Paper>
      </div>
    </Container>
  );
};

export default ProdDetail;
