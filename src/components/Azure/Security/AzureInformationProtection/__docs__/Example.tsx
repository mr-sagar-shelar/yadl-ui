import React, { FC } from "react";
  import AzureInformationProtection from "../AzureInformationProtection";
  
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
        <AzureInformationProtection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  