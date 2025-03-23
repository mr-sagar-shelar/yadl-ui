import React, { FC } from "react";
import DollPlayDollPlay from "../DollPlayDollPlay";

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
      <DollPlayDollPlay width="500px" height="500px" />
    </div>
  );
};

export default Example;
