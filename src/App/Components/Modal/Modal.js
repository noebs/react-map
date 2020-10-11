import React, { useContext } from "react";
import { Data } from "../../mockData";
import { ModalContext } from "../../Store/ModalProvider";
import { CurrentNodeContext } from "../../Store/CurrentNodeProvider";

const Modal = ({ features }) => {
  const [isModalOpen] = useContext(ModalContext);
  const [currentNode] = useContext(CurrentNodeContext);
  let information = Data.find(
    (e) => e.homeNumber.toString() === features[currentNode]?.values_.text
  );
  return (
    <div
      className={`w-screen h-screen bg-opacity-25 bg-black absolute inset-y-0 inset-x-0 ${
        !isModalOpen && "hidden"
      } `}
    >
      <div className="absolute w-1/2 h-64 bg-white inset-y-0 inset-x-0 m-auto shadow-xl rounded-lg z-10 text-black flex flex-col justify-center items-center gap-5">
        <p>{information?.homeNumber}</p>
        <p>{information?.BreadInformation.lastTime}</p>
        <p>{information?.landLord}</p>
      </div>
    </div>
  );
};

export default Modal;
