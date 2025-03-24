import React, { FC } from "react";
  import AzureMonitorPipeline from "../AzureMonitorPipeline";
  
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
        <AzureMonitorPipeline width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  