import React, { FC } from "react";
import Documents from "../Documents";

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
      <Documents width="500px" height="500px" />
    </div>
  );
};

export default Example;
