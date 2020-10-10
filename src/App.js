import React, { useEffect, useState } from "react";
import { Map, View } from "ol";
import { GeoJSON } from "ol/format";
import { Tile as TileLayer, VectorImage } from "ol/layer";
import { XYZ as XYZSource, Vector } from "ol/source";
import url from "./assets/map.geojson";
import { Stroke, Style, Text } from "ol/style";
import Cards from "./App/Components/Cards/Cards";
const TestMap = () => {
  console.log("%c%s", "color: #00a3cc", "App re-render");

  const vector = new Vector({
    format: new GeoJSON({ dataProjection: "EPSG:4326" }),
    url: url,
  });

  const strokStyle = (feature) => {
    return new Style({
      stroke: new Stroke({
        color: "black",
        width: 2,
      }),
      text: new Text({
        font: "12px Calibri,sans-serif",
        textAlign: "center",
        rotation: -0.18,
        scale: 1.3,
        text: feature.get("text"),
      }),
    });
  };
  const [map] = useState(
    new Map({
      target: undefined,
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
        new VectorImage({
          source: vector,
          style: strokStyle,
          visible: true,
        }),
      ],
      view: new View({
        rotation: 0.18,
        projection: "EPSG:4326",
        center: [32.56635, 15.56647],
        zoom: 17,
      }),
    })
  );
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    map.setTarget("map");
    // remove setTimeout later
    setTimeout(() => {
      setFeatures(vector.getFeatures());
    }, 1000);
    return () => map.setTarget(undefined);
    // eslint-disable-next-line
  }, []);

  // map.on("click", (element) => {
  //   map.forEachFeatureAtPixel(element.pixel, (element) => handelClick(element));
  // });

  // const handelClick = (element) => {
  //   document.getElementById("element").innerText = element.values_.text;
  //   map.getView().setZoom(19);
  //   console.log(element);
  // };

  return (
    <>
      <div id="map" className="w-screen h-screen relative" />
      {/* <div className=" bg-white w-1/2 shadow-md rounded-md h-40 absolute m-auto bottom-0 left-0 right-0 mb-6 flex gap-6">
        {handleCards()}
      </div> */}
      <Cards
        features={features.filter((e) => e.values_.text)}
        map={map.getView()}
      />
    </>
  );
};

export default TestMap;
