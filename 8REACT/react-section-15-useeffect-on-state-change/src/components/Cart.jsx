import AxiosInstance from "../helpers/AxiosInstance";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  const getCarts = () => {
    
    try {
      AxiosInstance.get('/carts').then((carts) => {
        setCarts(carts.data);
      });
    } catch (error) {
      console.log("carts lane me problem huyi");
    }
  };



  useEffect(() => {
    console.log('cart component mount ho gaya')
    getCarts();

    return () => {
      console.log('unmount ho gaya cart component');
    }
  }, [])

  return (
    <div className="w-1/2 mx-auto p-5 flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-semibold text-emerald-500">Carts</h1>
      
      <div className="w-full min-h-fit flex gap-2 flex-wrap">
        {carts &&
          carts.map((cart, ind) => (
            <div
              key={ind}
              className="w-32 min-h-32 bg-green-300 py-3 rounded-xl border-2 flex flex-col justify-start items-center"
            >
              <div className="w-8 h-8 rounded-full bg-red-500"></div>
              <h2 className="text-sm text-zinc-500">{cart.id}</h2>
              <h3 className="text-sm font-semibold">{cart.userid}</h3>
              <h4 className="text-xs">{cart.date}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
