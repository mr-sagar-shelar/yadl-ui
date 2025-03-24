import React, { FC } from "react";
  import DefenderSensor from "../DefenderSensor";
  
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
        <DefenderSensor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  