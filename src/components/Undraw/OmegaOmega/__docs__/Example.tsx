import React, { FC } from "react";
import OmegaOmega from "../OmegaOmega";

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
      <OmegaOmega width="500px" height="500px" />
    </div>
  );
};

export default Example;
