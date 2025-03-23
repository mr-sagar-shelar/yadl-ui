import React, { FC } from "react";
import MakeItRain from "../MakeItRain";

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
      <MakeItRain width="500px" height="500px" />
    </div>
  );
};

export default Example;
