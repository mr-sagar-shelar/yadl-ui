import React, { FC } from "react";
import LivePhoto from "../LivePhoto";

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
      <LivePhoto width="500px" height="500px" />
    </div>
  );
};

export default Example;
