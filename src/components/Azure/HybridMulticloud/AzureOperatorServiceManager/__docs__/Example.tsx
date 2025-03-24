import React, { FC } from "react";
  import AzureOperatorServiceManager from "../AzureOperatorServiceManager";
  
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
        <AzureOperatorServiceManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  