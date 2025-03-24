import React, { FC } from "react";
  import AzureIoTOperations from "../AzureIoTOperations";
  
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
        <AzureIoTOperations width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  