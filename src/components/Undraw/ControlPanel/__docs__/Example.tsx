import React, { FC } from "react";
import ControlPanel from "../ControlPanel";

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
      <ControlPanel width="500px" height="500px" />
    </div>
  );
};

export default Example;
