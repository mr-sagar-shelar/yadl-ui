import React, { FC } from "react";
  import AzureDeploymentEnvironments from "../AzureDeploymentEnvironments";
  
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
        <AzureDeploymentEnvironments width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  