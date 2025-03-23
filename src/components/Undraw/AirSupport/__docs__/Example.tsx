import React, { FC } from "react";
import AirSupport from "../AirSupport";

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
      <AirSupport width="500px" height="500px" />
    </div>
  );
};

export default Example;
