import React, { FC } from "react";
  import AzureWorkbooks from "../AzureWorkbooks";
  
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
        <AzureWorkbooks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  