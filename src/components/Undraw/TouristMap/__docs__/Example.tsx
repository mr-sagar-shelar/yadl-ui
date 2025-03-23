import React, { FC } from "react";
import TouristMap from "../TouristMap";

const Example = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TouristMap width="500px" height="500px" />
    </div>
  );
};

export default Example;
