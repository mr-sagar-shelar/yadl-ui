import React, { FC } from "react";
import MomentsMoments from "../MomentsMoments";

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
      <MomentsMoments width="500px" height="500px" />
    </div>
  );
};

export default Example;
