import React, { useState, useEffect, useRef } from "react";
import { rightArrow, leftArrow } from "../../../assets/icons";
const Cards = ({ features, map }) => {
  console.log("%c%s", "color: #00e600", "card re-render");
  const [current, setCurrent] = useState(0);
  const firstLoad = useRef(true);
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    map.setCenter(features[current].geometryChangeKey_.target.flatCoordinates);
    map.setZoom(19);
    // eslint-disable-next-line
  }, [current]);
  const handelClick = (count) => {
    if (current + count < 0 || current + count > features?.length - 1) {
      return;
    }
    setCurrent(current + count);
  };
  return (
    <div className=" bg-white w-1/2 shadow-2xl px-3 rounded-md h-40 absolute m-auto bottom-0 left-0 right-0 mb-6 flex gap-6 items-center justify-between">
      <button onClick={() => handelClick(-1)}>{leftArrow}</button>
      <p>{features[current]?.values_.text}</p>
      <button onClick={() => handelClick(1)}>{rightArrow}</button>
    </div>
  );
};

export default Cards;
