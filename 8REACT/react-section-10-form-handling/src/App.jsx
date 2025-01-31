import React from "react";
import UncontrolledUseRef from "./components/UncontrolledUseRef";
import Controlled from "./components/Controlled";
import ReactHookForm from "./components/ReactHookForm";

const App = () => {
  return (
    <div className="w-full h-screen p-10 flex justify-center items-center">
      {/* <UncontrolledUseRef /> */}
      {/* <Controlled /> */}
      <ReactHookForm />
    </div>
  );
};

export default App;
