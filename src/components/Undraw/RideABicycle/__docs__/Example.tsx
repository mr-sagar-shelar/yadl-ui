import React, { FC } from "react";
import RideABicycle from "../RideABicycle";

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
      <RideABicycle width="500px" height="500px" />
    </div>
  );
};

export default Example;
