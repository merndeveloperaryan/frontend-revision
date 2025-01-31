import React, { useState } from "react";

const Controlled = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username is : ${name} and the password is : ${password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="w-1/4 h-1/2 rounded-xl border-2  flex justify-center items-center flex-col gap-4"
    >
      <div>
        <input
          value={name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-[90%] border-2 p-2 ml-2 rounded "
          type="text"
          placeholder="Enter you name"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-[90%] border-2 p-2 ml-2 rounded my-2"
          type="password"
          placeholder="Enter you password"
        />
      </div>

      <button
        type="submit"
        className="px-3 py-2 rounded bg-blue-600 text-xs text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Controlled;
