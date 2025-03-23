import React, { FC } from "react";
import OptimizeImage from "../OptimizeImage";

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
      <OptimizeImage width="500px" height="500px" />
    </div>
  );
};

export default Example;
