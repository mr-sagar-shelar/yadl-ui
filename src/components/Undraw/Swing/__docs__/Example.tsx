import React, { FC } from "react";
import Swing from "../Swing";

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
      <Swing width="500px" height="500px" />
    </div>
  );
};

export default Example;
