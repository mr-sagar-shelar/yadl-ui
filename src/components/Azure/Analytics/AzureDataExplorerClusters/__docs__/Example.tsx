import React, { FC } from "react";
  import AzureDataExplorerClusters from "../AzureDataExplorerClusters";
  
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
        <AzureDataExplorerClusters width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  