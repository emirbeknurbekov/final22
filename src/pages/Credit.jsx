import { Button, IconButton } from "@mui/material";
// import { render } from "@testing-library/react";
// import { render } from "@testing-library/react";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
// import PaymentsIcon from "@mui/icons-material/Payments";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
// import Toastify from "../components/Toastify/Toastify";
import { notify } from "../components/Toastify/Toastify";
import "../pagesCSS/Credit.css";

const Credit = () => {
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const navigate = useNavigate();

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleClick = () => {
    if (
      state.cvc.trim() !== "" &&
      state.expiry.trim() !== "" &&
      state.focus.trim() !== "" &&
      state.name.trim() !== "" &&
      state.number.trim() !== ""
    ) {
      notify("success", "Payment was successful!");
      navigate("/");
    } else {
      notify("error", "Fill in the fields!");
    }
  };
  return (
    <div id="PaymentForm" className="credit-card credit-img">
      <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={(e) => handleInputChange(e)}
          onFocus={(e) => handleInputFocus(e)}
          className="card-inp"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={(e) => handleInputChange(e)}
          onFocus={(e) => handleInputFocus(e)}
          className="card-inp"
        />

        <input
          type="tel"
          name="expiry"
          placeholder="MM/YY EXPIRY"
          onChange={(e) => handleInputChange(e)}
          onFocus={(e) => handleInputFocus(e)}
          className="card-inp"
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          onChange={(e) => handleInputChange(e)}
          onFocus={(e) => handleInputFocus(e)}
          className="card-inp"
        />
        {/* <IconButton style={{ color: "green", fontSize: "20px" }}>
              Pay
            </IconButton> */}
        <input
          type="text"
          placeholder="Delivery address"
          className="card-inp"
        />
        <input type="tel" placeholder="Phone number" className="card-inp" />
      </form>

      {/* <NavLink to="/" style={{ textDecoration: "none" }}> */}
      <Button
        style={{
          backgroundColor: "green",
          color: "white",
          fontSize: "100%",
        }}
        onClick={() => handleClick()}
      >
        Pay & Order
      </Button>
      {/* </NavLink> */}
    </div>
  );
};

export default Credit;
