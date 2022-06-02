import React, { useEffect } from "react";
import "./App.css";
import MyRoutes from "./MyRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductContextProvider from "./Contexts/ProductContextProvider";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import CartContextProvider from "./Contexts/CartContextProvider";
import FavContextProvider from "./Contexts/FavContextProvider";
import CommentContextProvider from "./Contexts/CommentContextProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import Toastify from "./components/Toastify/Toastify";

function App() {
  AOS.init({ duration: 800 });
  return (
    <AuthContextProvider>
      <CommentContextProvider>
        <FavContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <Toastify />
              <MyRoutes />
            </ProductContextProvider>
          </CartContextProvider>
        </FavContextProvider>
      </CommentContextProvider>
    </AuthContextProvider>
  );
}

export default App;
