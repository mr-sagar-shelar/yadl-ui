import React, { FC } from "react";
import Pilates from "../Pilates";

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
      <Pilates width="500px" height="500px" />
    </div>
  );
};

export default Example;
