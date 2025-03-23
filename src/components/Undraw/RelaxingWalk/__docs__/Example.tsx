import React, { FC } from "react";
import RelaxingWalk from "../RelaxingWalk";

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
      <RelaxingWalk width="500px" height="500px" />
    </div>
  );
};

export default Example;
