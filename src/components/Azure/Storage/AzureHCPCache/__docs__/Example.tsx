import React, { FC } from "react";
  import AzureHCPCache from "../AzureHCPCache";
  
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
        <AzureHCPCache width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  