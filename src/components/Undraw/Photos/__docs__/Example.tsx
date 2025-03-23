import React, { FC } from "react";
import Photos from "../Photos";

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
      <Photos width="500px" height="500px" />
    </div>
  );
};

export default Example;
