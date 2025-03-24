import React, { FC } from "react";
  import AzureADB2C from "../AzureADB2C";
  
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
        <AzureADB2C width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  