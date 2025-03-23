import React, { FC } from "react";
import FittingPiece from "../FittingPiece";

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
      <FittingPiece width="500px" height="500px" />
    </div>
  );
};

export default Example;
