import AxiosInstance from "../helpers/AxiosInstance";
import React, { useEffect, useState } from "react";

const Users = () => {
  // yaha par poora users ka data hai
  const [users, setUsers] = useState([]);
  const [compoName, setCompoName] = useState("Users");

  // yaha se users ka data mangaya ja raha hai
  const getUsers = () => {
    const api = "/users";
    try {
      AxiosInstance.get(api).then((data) => {
        setUsers(data.data);
      });
    } catch (error) {
      console.log("Users ko lane me problem huyi");
    }
  };

  useEffect(() => {

    console.log('mount users hua component')
    getUsers();

    return () => {
      console.log('unmount ho gaya users component');
    }
  },[compoName]);

  return users.length > 0 ? (
    <div className="w-1/2 mx-auto p-5 flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-semibold text-emerald-500">{compoName}</h1>
      <button
        onClick={() => setCompoName("Sare Users")}
        className="px-5 py-3 rounded-xl bg-blue-200"
      >
        change text
      </button>
      <div className="w-full min-h-fit flex gap-2 flex-wrap">
        {users &&
          users.map(({ email, phone, username }, ind) => (
            <div
              key={ind}
              className="w-32 min-h-32 bg-green-300 py-3 rounded-xl border-2 flex flex-col justify-start items-center"
            >
              <div className="w-8 h-8 rounded-full bg-red-500"></div>
              <h2 className="text-sm text-zinc-500">{email}</h2>
              <h3 className="text-sm font-semibold">{username}</h3>
              <h4 className="text-xs">{phone}</h4>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <h2 className="text-balck font-semibold text-5xl">Loading...</h2>
  );
};

export default Users;
