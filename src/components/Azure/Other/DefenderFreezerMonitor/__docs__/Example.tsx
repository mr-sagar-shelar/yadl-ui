import React, { FC } from "react";
  import DefenderFreezerMonitor from "../DefenderFreezerMonitor";
  
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
        <DefenderFreezerMonitor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  