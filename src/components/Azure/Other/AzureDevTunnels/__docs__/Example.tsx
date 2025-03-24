import React, { FC } from "react";
  import AzureDevTunnels from "../AzureDevTunnels";
  
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
        <AzureDevTunnels width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  