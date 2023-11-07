import { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

const Worldcontext = (props) => {
  const [world, setWorld] = useState("korea");

  return (
    <UserContext.Provider
      value={{
        world,
        setWorld,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default Worldcontext;