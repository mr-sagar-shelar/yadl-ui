import React, { FC } from "react";
  import AzureTokenService from "../AzureTokenService";
  
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
        <AzureTokenService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  