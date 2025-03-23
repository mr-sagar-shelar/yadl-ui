import React, { FC } from "react";
import TakeOutBoxes from "../TakeOutBoxes";

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
      <TakeOutBoxes width="500px" height="500px" />
    </div>
  );
};

export default Example;
