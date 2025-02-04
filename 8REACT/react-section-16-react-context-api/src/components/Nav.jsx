import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full p-10 bg-black flex gap-10 justify-center items-center">
      <Link className="text-sm font-medium text-red-500" to="/">
        Home
      </Link>
      <Link
        className="text-sm font-medium text-zinc-300 hover:text-teal-500 transition-all duration-300"
        to="/user"
      >
        User
      </Link>
      <Link
        className="text-sm font-medium text-zinc-300 hover:text-teal-500 transition-all duration-300"
        to="/product"
      >
        Product
      </Link>
      <Link
        className="text-sm font-medium text-zinc-300 hover:text-teal-500 transition-all duration-300"
        to="/cart"
      >
        Cart
      </Link>
    </div>
  );
};

export default Nav;
