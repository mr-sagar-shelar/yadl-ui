import React, { FC } from "react";
import CloudSync from "../CloudSync";

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
      <CloudSync width="500px" height="500px" />
    </div>
  );
};

export default Example;
