import React, { FC } from "react";
import Selfie from "../Selfie";

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
      <Selfie width="500px" height="500px" />
    </div>
  );
};

export default Example;
