import React, { FC } from "react";
  import AzureBlockchainService from "../AzureBlockchainService";
  
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
        <AzureBlockchainService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  