import React, { useEffect } from "react";
import { Map, View } from "ol";
import { GeoJSON } from "ol/format";
import { Tile as TileLayer, VectorImage } from "ol/layer";
import { XYZ as XYZSource, Vector } from "ol/source";
import url from "./assets/map.geojson";
import { Stroke, Style, Text } from "ol/style";
const TestMap = () => {
  const strokStyle = (feature) => {
    return new Style({
      stroke: new Stroke({
        color: "black",
        width: 2,
      }),
      text: new Text({
        rotation: -0.18,
        scale: 1.3,
        text: feature.get("text"),
      }),
    });
  };
  useEffect(() => {
    new Map({
      //target is the ref to `map`
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
        new VectorImage({
          source: new Vector({
            format: new GeoJSON({ dataProjection: "EPSG:4326" }),
            url: url,
          }),
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
    });
  }, []);

  const style = {
    width: "100%",
    height: "100vh",
  };
  return <div id="map" style={style} />;
};

export default TestMap;
