import React, { FC } from "react";
import GdprGDPR from "../GdprGDPR";

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
      <GdprGDPR width="500px" height="500px" />
    </div>
  );
};

export default Example;
