import React, { FC } from "react";
  import AzureSQL from "../AzureSQL";
  
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
        <AzureSQL width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  