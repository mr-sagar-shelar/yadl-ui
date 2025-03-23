import React, { FC } from "react";
import RoboticsRobotics from "../RoboticsRobotics";

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
      <RoboticsRobotics width="500px" height="500px" />
    </div>
  );
};

export default Example;
