import React, { FC } from "react";
import BikingBiking from "../BikingBiking";

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
      <BikingBiking width="500px" height="500px" />
    </div>
  );
};

export default Example;
