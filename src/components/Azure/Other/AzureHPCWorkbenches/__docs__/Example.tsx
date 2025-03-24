import React, { FC } from "react";
  import AzureHPCWorkbenches from "../AzureHPCWorkbenches";
  
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
        <AzureHPCWorkbenches width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  