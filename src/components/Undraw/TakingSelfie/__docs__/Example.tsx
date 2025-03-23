import React, { FC } from "react";
import TakingSelfie from "../TakingSelfie";

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
      <TakingSelfie width="500px" height="500px" />
    </div>
  );
};

export default Example;
