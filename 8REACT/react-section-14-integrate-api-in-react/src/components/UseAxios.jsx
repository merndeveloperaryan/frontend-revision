import axios from "axios";
import React, { useState } from "react";

export const UseAxios = () => {

    const [products, setProducts] = useState([]);


  const getDataFromAxios = () => {
    const api = "https://fakestoreapi.com/products";
    try {
      axios.get(api).then((response) => {
        setProducts(response.data);
      });
    } catch (err) {}
  };




  return (
    <div className="h-screen w-full bg-zinc-300 p-10">
      <button
        onClick={getDataFromAxios}
        className="cursor-pointer px-6 py-3 rounded bg-blue-300"
      >
        Data Kahan hai bhaiya
      </button>
      <div className="w-full h-fit flex flex-col">
        {products && products.map(({title}, ind) => <h2 key={ind} className="px-2 py-1 bg-red-200 my-1">{title}</h2>)}
      </div>
    </div>
  );
};
