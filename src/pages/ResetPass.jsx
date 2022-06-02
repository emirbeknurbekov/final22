import { Button, Container, Link, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { notify } from "../components/Toastify/Toastify";
import { useAuth } from "../Contexts/AuthContextProvider";
import MailLockIcon from "@mui/icons-material/MailLock";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://mui.com/"></Link>
      KROSSBOX <br />
      {new Date().getFullYear()}
    </Typography>
  );
}
const ResetPass = () => {
  const { resetPass } = useAuth();
  const [inpVal, setInpVal] = useState("");

  const handleSend = () => {
    if (!inpVal) {
      notify("error", "Fill the field");
    } else {
      resetPass(inpVal);
      notify("success", "The letter was sent!");
      setInpVal("");
    }
  };
  return (
    <div style={{ margin: "auto" }}>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "200px",
            padding: "30px",
          }}
        >
          <MailLockIcon fontSize="large" />

          <br />
          <input
            style={{
              height: "30px",
              width: "300px",
            }}
            placeholder="Enter email..."
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
          ></input>
          <Button
            onClick={handleSend}
            variant="contained"
            style={{
              height: "30px",
              width: "300px",
              marginTop: "10px",
            }}
          >
            Send message
          </Button>
          <Copyright sx={{ mt: 5 }} />
        </div>
      </Container>
    </div>
  );
};

export default ResetPass;
