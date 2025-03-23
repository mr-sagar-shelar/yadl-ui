import React, { FC } from "react";
import Animating from "../Animating";

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
      <Animating width="500px" height="500px" />
    </div>
  );
};

export default Example;
