import React from "react";

const Form = ({ register, handleSubmit, getData }) => {




  return (
    <div className="w-full h-[25%] p-3 flex justify-center items-center">
      <form onSubmit={handleSubmit(data => getData(data))} className="border-2 rounded-xl w-[70%] h-full flex items-center justify-center gap-2">
        <div>
          <input
            {...register('name')}
            type="text"
            className="border-2 rounded-lg px-3 py-2 text-xs font-semibold"
            placeholder="Product name"
          />
        </div>
        <div>
          <input
            {...register('price')}
            type="text"
            className="border-2 rounded-lg px-3 py-2 text-xs font-semibold"
            placeholder="Price"
          />
        </div>
        <div>
          <input
            {...register('src')}
            type="text"
            className="border-2 rounded-lg px-3 py-2 text-xs font-semibold"
            placeholder="Product image"
          />
        </div>
        <button className="px-3 py-1 rounded-xl bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default Form;
