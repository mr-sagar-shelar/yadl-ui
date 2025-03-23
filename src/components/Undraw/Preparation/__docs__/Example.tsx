import React, { FC } from "react";
import Preparation from "../Preparation";

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
      <Preparation width="500px" height="500px" />
    </div>
  );
};

export default Example;
