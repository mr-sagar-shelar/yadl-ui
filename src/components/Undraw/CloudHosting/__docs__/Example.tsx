import React, { FC } from "react";
import CloudHosting from "../CloudHosting";

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
      <CloudHosting width="500px" height="500px" />
    </div>
  );
};

export default Example;
