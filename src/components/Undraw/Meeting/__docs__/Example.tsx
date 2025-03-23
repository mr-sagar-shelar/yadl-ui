import React, { FC } from "react";
import Meeting from "../Meeting";

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
      <Meeting width="500px" height="500px" />
    </div>
  );
};

export default Example;
