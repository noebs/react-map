import React from "react";
import CurrentNodeProvider from "./CurrentNodeProvider";
import ModalProvider from "./ModalProvider";
const Store = ({ children }) => {
  return (
    <CurrentNodeProvider>
      <ModalProvider>{children}</ModalProvider>
    </CurrentNodeProvider>
  );
};

export default Store;
