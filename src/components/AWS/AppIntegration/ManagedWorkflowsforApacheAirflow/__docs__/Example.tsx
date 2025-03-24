import React, { FC } from "react";
  import ManagedWorkflowsforApacheAirflow from "../ManagedWorkflowsforApacheAirflow";
  
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
        <ManagedWorkflowsforApacheAirflow width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  