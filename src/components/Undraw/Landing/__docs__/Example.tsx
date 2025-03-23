import React, { FC } from "react";
import Landing from "../Landing";

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
      <Landing width="500px" height="500px" />
    </div>
  );
};

export default Example;
