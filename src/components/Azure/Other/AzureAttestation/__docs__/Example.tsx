import React, { FC } from "react";
  import AzureAttestation from "../AzureAttestation";
  
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
        <AzureAttestation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  