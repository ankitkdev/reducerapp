import React, { createContext, useState } from "react";
import HookRef from "./HookRef";

export const userContext = createContext();
function Context() {
  const [data, setData] = useState("ankit");
  return (
    <>
      <userContext.Provider value={data}>
        <HookRef />
      </userContext.Provider>
    </>
  );
}

export default Context;
