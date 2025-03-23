import React, { FC } from "react";
import Portfolio from "../Portfolio";

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
      <Portfolio width="500px" height="500px" />
    </div>
  );
};

export default Example;
