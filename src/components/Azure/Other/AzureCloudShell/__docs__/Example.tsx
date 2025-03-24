import React, { FC } from "react";
  import AzureCloudShell from "../AzureCloudShell";
  
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
        <AzureCloudShell width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  