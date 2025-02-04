import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import UserDetails from "../components/UserDetails";
import Product from "../components/Product";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
