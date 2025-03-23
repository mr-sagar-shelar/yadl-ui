import React, { FC } from "react";
import MobileDevelopment from "../MobileDevelopment";

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
      <MobileDevelopment width="500px" height="500px" />
    </div>
  );
};

export default Example;
