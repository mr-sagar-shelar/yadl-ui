import React, { FC } from "react";
import WorkoutWorkout from "../WorkoutWorkout";

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
      <WorkoutWorkout width="500px" height="500px" />
    </div>
  );
};

export default Example;
