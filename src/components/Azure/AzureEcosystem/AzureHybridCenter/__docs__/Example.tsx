import React, { FC } from "react";
  import AzureHybridCenter from "../AzureHybridCenter";
  
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
        <AzureHybridCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  