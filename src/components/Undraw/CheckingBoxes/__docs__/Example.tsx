import React, { FC } from "react";
import CheckingBoxes from "../CheckingBoxes";

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
      <CheckingBoxes width="500px" height="500px" />
    </div>
  );
};

export default Example;
