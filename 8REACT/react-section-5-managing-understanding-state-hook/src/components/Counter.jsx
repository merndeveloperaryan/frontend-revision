import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {

    // you must give the new value for the state
    setCount((prev) => prev + 1); 
  }

  const handleDecrease = () => {

    // you must give the new value for the state
    setCount((prev) => prev - 1);
  }

  return (
    <div className="w-full h-screen p-10 text-white bg-zinc-400 flex flex-col justify-center items-center gap-5">
      <h1 className="w-32 h-32 rounded-lg bg-amber-400 flex justify-center items-center">
        {count}
      </h1>
      <button onClick={handleIncrease} className="px-3 py-2 rounded-lg bg-blue-500">Increase</button>
      <button onClick={handleDecrease} className="px-3 py-2 rounded-lg bg-blue-500">Decrease</button>
    </div>
  );
};

export default Counter;
