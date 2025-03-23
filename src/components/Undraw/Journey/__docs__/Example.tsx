import React, { FC } from "react";
import Journey from "../Journey";

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
      <Journey width="500px" height="500px" />
    </div>
  );
};

export default Example;
