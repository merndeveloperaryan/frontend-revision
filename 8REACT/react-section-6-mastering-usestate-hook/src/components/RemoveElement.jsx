import React, { useState } from "react";

const RemoveElement = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7]);

  const handleRemove = () => {
    setVal(val.filter((it, ind) => ind !== val.length - 1));
  }



  return (
    <div className="w-full h-screen bg-zinc-400 flex justify-center items-center flex-col gap-1">
      {val.map((item) => (
        <h1>{item}</h1>
      ))}
      <button onClick={handleRemove} className="px-3 py-2 bg-blue-500 rounded-lg text-xs font-semibold">
        remove element
      </button>
    </div>
  );
};

export default RemoveElement;
