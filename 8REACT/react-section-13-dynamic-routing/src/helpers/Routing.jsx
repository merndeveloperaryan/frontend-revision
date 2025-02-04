import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import Products from "../components/Products";
import Help from "../components/Help";
import ProductsDetails from "../components/ProductsDetails";
import UserDetails from "../components/UserDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:username" element={<UserDetails />} />
      <Route path="/products" element={<Products />}>
        <Route path="/products/:productsname" element={<ProductsDetails />} />
      </Route>
      {/* <Route path="/products/:productsname" element={<ProductsDetails />} /> */}
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default Routing;
