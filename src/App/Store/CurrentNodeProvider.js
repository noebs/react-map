import React, { useState, createContext } from "react";
export const CurrentNodeContext = createContext();
const CurrentNodeProvider = ({ children }) => {
  const [currentNode, setCurrentNode] = useState(0);
  return (
    <CurrentNodeContext.Provider value={[currentNode, setCurrentNode]}>
      {children}
    </CurrentNodeContext.Provider>
  );
};

export default CurrentNodeProvider;
