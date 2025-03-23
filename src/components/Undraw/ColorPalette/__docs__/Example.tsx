import React, { FC } from "react";
import ColorPalette from "../ColorPalette";

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
      <ColorPalette width="500px" height="500px" />
    </div>
  );
};

export default Example;
