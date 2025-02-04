import React, { createContext, useEffect, useState } from "react";
import AxiosInstance from '../helpers/AxiosInstance'

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [users, setusers] = useState([]);

  const getUsers = () => {
    try {
      AxiosInstance.get("/api").then((result) => {
        setusers(result.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setusers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
