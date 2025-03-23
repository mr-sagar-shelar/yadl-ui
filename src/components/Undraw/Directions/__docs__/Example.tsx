import React, { FC } from "react";
import Directions from "../Directions";

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
      <Directions width="500px" height="500px" />
    </div>
  );
};

export default Example;
