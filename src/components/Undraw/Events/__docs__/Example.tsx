import React, { FC } from "react";
import Events from "../Events";

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
      <Events width="500px" height="500px" />
    </div>
  );
};

export default Example;
