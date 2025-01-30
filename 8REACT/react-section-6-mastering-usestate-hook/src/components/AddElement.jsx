import React, { useState } from "react";

const AddElement = () => {
  const [val, setVal] = useState([
    { name: "aryan", age: 12 },
    { name: "anil", age: 13 },
    { name: "sam", age: 14 },
  ]);


  // To change any specific identity and isitarah search and replace feature bhi kaam karta hai
  const handleChange = () => {
    setVal(() => val.map((item) => item.name === 'anil' ? {name: 'anil', age: 20} : item));
  }


  const handleAdd = () => {
    setVal([...val, {name: 'sandy', age: 90}]);
  }



  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center flex-col gap-1">
      {val.map(({name, age}) => (
        <div className="w-52 h-32 rounded-lg border-2 border-amber-700 flex justify-center items-center">
            {name} : {age}
        </div>
      ))}
      <button
        onClick={handleChange}
        className="px-3 py-2 bg-blue-500 rounded-lg text-xs font-semibold"
      >
        change element
      </button>
      <button
        onClick={handleAdd}
        className="px-3 py-2 bg-blue-500 rounded-lg text-xs font-semibold"
      >
        add element
      </button>
    </div>
  );
};

export default AddElement;
