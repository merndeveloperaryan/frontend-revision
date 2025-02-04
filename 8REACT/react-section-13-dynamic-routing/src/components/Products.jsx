import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {

  return (
    <div className="w-1/2 mx-auto min-h-screen">
      <h2 className="w-full text-center text-2xl font-semibold text-yellow-600 underline">
        Products
      </h2>
      <p className="w-full text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa
        aut veniam dignissimos magni cumque accusantium est at id porro
        molestias molestiae praesentium exercitationem rem sed, libero inventore
        magnam iste. At sint deleniti nihil cupiditate pariatur hic animi dicta
        numquam cumque, asperiores facilis nulla consequuntur. Rerum provident
        asperiores deserunt necessitatibus suscipit commodi accusantium tempora
        dolor, optio ratione exercitationem fugiat minima tempore cum
        laudantium? Quia{" "}
      </p>
      <div className="w-full p-5 flex flex-col">
        <Link
          className="w-56 p-3 rounded-lg bg-red-300 my-1"
          to="/products/shampoo"
        >
          shampoo
        </Link>
        <Link
          className="w-56 p-3 rounded-lg bg-red-300 my-1"
          to="/products/oil"
        >
          oil
        </Link>
        <Link
          className="w-56 p-3 rounded-lg bg-red-300 my-1"
          to="/products/sofa"
        >
          sofa
        </Link>
        <Link
          className="w-56 p-3 rounded-lg bg-red-300 my-1"
          to="/products/fan"
        >
          fan
        </Link>
        <Link
          className="w-56 p-3 rounded-lg bg-red-300 my-1"
          to="/products/bed"
        >
          bed
        </Link>
        <Link
          className="w-56 p-3 rounded-lg bg-red-300 my-1"
          to="/products/chair"
        >
          chair
        </Link>
      </div>

      <div className="bg-green-200">
        <Outlet />
      </div>
    
    </div>
  );
};

export default Products;
