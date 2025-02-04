import { createContext, useEffect, useState } from "react";
import AxiosInstance from "../helpers/AxiosInstance";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [users, setusers] = useState([]);

  const getUser = () => {
    try {
      AxiosInstance.get("/users").then((result) => {
        setusers(result.data);
      });
    } catch (error) {
      console.log("user ko lane me koi problem huyi hai");
    }
  };

  useEffect(() => {
    getUser();
  }, [])

  return (
    <UserContext.Provider value={{ users, setusers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
