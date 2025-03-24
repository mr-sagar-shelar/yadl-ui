import React, { FC } from "react";
  import AzureStackEdge from "../AzureStackEdge";
  
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
        <AzureStackEdge width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  