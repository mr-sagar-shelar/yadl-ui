import React, { FC } from "react";
import IndoorBike from "../IndoorBike";

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
      <IndoorBike width="500px" height="500px" />
    </div>
  );
};

export default Example;
