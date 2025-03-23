import React, { FC } from "react";
import ThingsToSay from "../ThingsToSay";

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
      <ThingsToSay width="500px" height="500px" />
    </div>
  );
};

export default Example;
