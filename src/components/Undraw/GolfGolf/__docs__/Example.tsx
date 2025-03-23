import React, { FC } from "react";
import GolfGolf from "../GolfGolf";

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
      <GolfGolf width="500px" height="500px" />
    </div>
  );
};

export default Example;
