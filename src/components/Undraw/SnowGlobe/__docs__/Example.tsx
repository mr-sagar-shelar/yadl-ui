import React, { FC } from "react";
import SnowGlobe from "../SnowGlobe";

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
      <SnowGlobe width="500px" height="500px" />
    </div>
  );
};

export default Example;
