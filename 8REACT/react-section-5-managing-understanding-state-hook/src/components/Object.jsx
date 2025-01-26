import React, { useState } from "react";

const Object = () => {

    const [val, setVal] = useState({name: 'Bhanu', ans: false});

    const handleDogeYaNahi = () => {

        // Do this if you want to change only one property of an object
        setVal({...val, ans: !val.ans});
    }


  return (
    <div className="w-full h-screen p-10 text-black font-semibold bg-zinc-400 flex flex-col justify-center items-center gap-5">
      <h1 className="w-52 h-32 p-3 rounded-lg bg-amber-400 flex justify-center items-center">
        {val.name} : {val.ans ? 'Le lena meri jhuka ke': 'Abhi man nhi hai dene ka'}
      </h1>
      <button
        onClick={handleDogeYaNahi}
        className="px-3 py-2 rounded-lg bg-blue-500"
      >
        {val.ans ? 'Good accha baccha': 'Mujhe abhi marna hai tumhari'}
      </button>
    </div>
  );
};

export default Object;
