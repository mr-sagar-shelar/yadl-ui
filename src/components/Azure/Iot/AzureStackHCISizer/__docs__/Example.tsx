import React, { FC } from "react";
  import AzureStackHCISizer from "../AzureStackHCISizer";
  
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
        <AzureStackHCISizer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  