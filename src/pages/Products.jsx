import { Container } from "@mui/material";
import React, { useEffect } from "react";
import ProdList from "../components/Products/ProdList/ProdList";
import "../pagesCSS/Products.css";

const Products = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="products back-img">
      <Container maxWidth="lg">
        {/* <h1 className="prod-title">SHOP</h1> */}
        <h1 data-aos="fade-down" data-aos-delay="150" className="prod-title1">
          New & Featured
        </h1>
        <ProdList />
      </Container>
    </div>
  );
};

export default Products;
