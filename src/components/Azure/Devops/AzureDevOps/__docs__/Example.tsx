import React, { FC } from "react";
  import AzureDevOps from "../AzureDevOps";
  
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
        <AzureDevOps width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  