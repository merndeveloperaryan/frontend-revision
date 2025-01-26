import React, { useState } from "react";

const Banned = () => {
  const [bool, setBool] = useState(false);

  const handleBan = () => {

    // Here we are going to ban or unBan you
    setBool(!bool);
  };


  return (
    <div className="w-full h-screen p-10 text-white bg-zinc-400 flex flex-col justify-center items-center gap-5">
      <h1 className="w-32 h-32 rounded-lg bg-amber-400 flex justify-center items-center">
        Banned : {bool ? bool.toString() : bool.toString()}
      </h1>
      <button onClick={handleBan} className="px-3 py-2 rounded-lg bg-blue-500">
      {bool ? "UnBanned" : "Banned"}
      </button>
    </div>
  );
};

export default Banned;
