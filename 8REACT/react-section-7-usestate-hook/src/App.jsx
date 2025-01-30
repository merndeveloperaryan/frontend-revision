import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const App = () => {
  const [slide, setSlide] = useState(false);

  const handleSlide = () => {

    // Professional way to invert the boolean value
    setSlide(() => !slide);
  }


  return (
    <div className="w-full h-screen bg-zinc-400 flex justify-center items-center">
      <div className="relative w-1/5 h-1/3 rounded-2xl flex overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1736230990003-a98eea26ea1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
          className={`transition-all duration-500 w-full h-full object-cover ${
            slide ? "-translate-x-[100%]" : "translate-x-[0%]"
          }`}
          alt=""
        />

        <img
          src="https://plus.unsplash.com/premium_photo-1737392495759-2aace4708e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
          className={`transition-all duration-500 w-full h-full object-cover ${slide ? '-translate-x-[100%]': 'translate-x-[0%]'}`}
          alt=""
        />

        <div onClick={handleSlide} className={`transition-all ${slide ? "rotate-180": 'rotate- 0'} absolute bottom-5 left-1/2 -translate-x-[50%] z-10 w-8 h-8 rounded-full bg-zinc-200 flex justify-center items-center`}>
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default App;

{
  /*
   */
}
