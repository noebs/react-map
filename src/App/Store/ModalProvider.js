import React, { createContext, useState } from "react";
export const ModalContext = createContext();
const ModalProvider = ({ children }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const toggleModal = () => setisModalOpen(!isModalOpen);

  return (
    <ModalContext.Provider value={[isModalOpen, toggleModal]}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
