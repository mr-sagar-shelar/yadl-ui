import React, { FC } from "react";
import Halloween from "../Halloween";

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
      <Halloween width="500px" height="500px" />
    </div>
  );
};

export default Example;
