import React, { FC } from "react";
import Recording from "../Recording";

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
      <Recording width="500px" height="500px" />
    </div>
  );
};

export default Example;
