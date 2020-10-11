import React, { useState, useEffect, useRef, useContext } from "react";
import { rightArrow, leftArrow } from "../../../assets/icons";
import { ModalContext } from "../../Store/ModalProvider";
import { CurrentNodeContext } from "../../Store/CurrentNodeProvider";
const Cards = ({ features, map }) => {
  console.log("%c%s", "color: #00e600", "card re-render");
  const [current, setCurrent] = useState(0);
  const firstLoad = useRef(true);
  const [, toggleModal] = useContext(ModalContext);
  const [currentNode, setCurrentNode] = useContext(CurrentNodeContext);
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    map.setCenter(
      features[currentNode].geometryChangeKey_.target.flatCoordinates
    );
    map.setZoom(19);
    // eslint-disable-next-line
  }, [currentNode]);
  const handelClick = (count) => {
    if (currentNode + count < 0 || currentNode + count > features?.length - 1) {
      return;
    }
    setCurrentNode(currentNode + count);
  };
  return (
    <div className=" bg-white w-1/2 lg:w-1/5 shadow-2xl px-3 rounded-md h-40 absolute m-auto bottom-0 left-0 right-0 mb-6 flex gap-6 items-center justify-between z-0">
      <button onClick={() => handelClick(-1)}>{leftArrow}</button>
      <div className="flex flex-col gap-5">
        <p className="text-center">{features[currentNode]?.values_.text}</p>
        <button
          className="font-semibold bg-gray-600 text-white rounded-md shadow-md py-3 px-3"
          onClick={() => toggleModal()}
        >
          More!
        </button>
      </div>
      <button onClick={() => handelClick(1)}>{rightArrow}</button>
    </div>
  );
};

export default Cards;
