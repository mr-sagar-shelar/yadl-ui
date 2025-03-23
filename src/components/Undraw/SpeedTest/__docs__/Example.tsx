import React, { FC } from "react";
import SpeedTest from "../SpeedTest";

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
      <SpeedTest width="500px" height="500px" />
    </div>
  );
};

export default Example;
