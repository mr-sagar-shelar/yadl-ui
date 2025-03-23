import React, { FC } from "react";
import StabilityBallStabilityBall from "../StabilityBallStabilityBall";

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
      <StabilityBallStabilityBall width="500px" height="500px" />
    </div>
  );
};

export default Example;
