import React, { FC } from "react";
  import AzureEdgeHardwareCenter from "../AzureEdgeHardwareCenter";
  
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
        <AzureEdgeHardwareCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  