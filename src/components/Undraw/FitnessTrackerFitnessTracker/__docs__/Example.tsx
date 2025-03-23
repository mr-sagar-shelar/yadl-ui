import React, { FC } from "react";
import FitnessTrackerFitnessTracker from "../FitnessTrackerFitnessTracker";

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
      <FitnessTrackerFitnessTracker width="500px" height="500px" />
    </div>
  );
};

export default Example;
