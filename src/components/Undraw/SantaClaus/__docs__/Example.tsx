import React, { FC } from "react";
import SantaClaus from "../SantaClaus";

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
      <SantaClaus width="500px" height="500px" />
    </div>
  );
};

export default Example;
