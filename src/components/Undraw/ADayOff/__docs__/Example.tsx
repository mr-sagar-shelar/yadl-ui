import React, { FC } from "react";
import ADayOff from "../ADayOff";

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
      <ADayOff width="500px" height="500px" />
    </div>
  );
};

export default Example;
