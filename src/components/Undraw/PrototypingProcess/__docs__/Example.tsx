import React, { FC } from "react";
import PrototypingProcess from "../PrototypingProcess";

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
      <PrototypingProcess width="500px" height="500px" />
    </div>
  );
};

export default Example;
