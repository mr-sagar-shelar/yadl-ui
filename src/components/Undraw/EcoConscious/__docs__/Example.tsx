import React, { FC } from "react";
import EcoConscious from "../EcoConscious";

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
      <EcoConscious width="500px" height="500px" />
    </div>
  );
};

export default Example;
