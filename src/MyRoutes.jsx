import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import About from "./pages/About";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import List from "./components/Admin/List/List";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import Products from "./pages/Products";
import ProdDetail from "./pages/ProdDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import Cart from "./pages/Cart";
import Fav from "./pages/Fav";
import Credit from "./pages/Credit";
import ResetPass from "./pages/ResetPass";
import { useAuth } from "./Contexts/AuthContextProvider";
import RequireAuth from "./components/Auth/RequireAuth";

const MyRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/forgotpass" element={<ResetPass />} />
        {currentUser.isAdmin && (
          <Route path="/admin" element={<Admin />}>
            <Route index element={<List />} />
            <Route path="add" element={<Add />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>
        )}
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:prodId" element={<ProdDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
