import React, { FC } from "react";
  import DefenderRobotController from "../DefenderRobotController";
  
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
        <DefenderRobotController width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  