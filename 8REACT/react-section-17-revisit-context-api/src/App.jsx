import React from "react";
import { Link } from "react-router-dom";
import Routing from "./helpers/Routing";

const App = () => {
  return (
    <>
      <nav className="w-full p-5 bg-teal-50 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      
      <Routing />
    </>
  );
};

export default App;
