import AxiosInstance from "../helpers/AxiosInstance";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = '/products';
    try {
      AxiosInstance.get(api).then((products) => {
        setProducts(products.data);
      });
    } catch (error) {
      console.log("products aane me problem huyi hai");
    }
  };


  useEffect(() => {
    console.log('mount hua product component')
    getProducts();

    return () => {
      console.log('product component unmount ho gaya');
    }
  }, [])


  return (
    <div className="w-1/2 mx-auto p-5 flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-semibold text-emerald-500">Products</h1>
      
      <div className="w-full min-h-fit flex gap-2 flex-wrap">
        {products &&
          products.map(({image, price , title, category}, ind) => (
            <div
              key={ind}
              className="w-32 min-h-32 bg-green-300 py-3 rounded-xl border-2 flex flex-col justify-start items-center"
            >
              <div className="w-8 h-8 rounded-full bg-red-500"></div>
              <h2 className="text-sm text-zinc-500">{price}</h2>
              <h3 className="text-sm font-semibold">{title}</h3>
              <h4 className="text-xs">{category}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
