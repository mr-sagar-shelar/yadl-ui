import React, { FC } from "react";
  import AzureA from "../AzureA";
  
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
        <AzureA width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  