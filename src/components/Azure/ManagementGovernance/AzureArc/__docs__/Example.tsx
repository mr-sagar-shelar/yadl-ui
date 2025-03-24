import React, { FC } from "react";
  import AzureArc from "../AzureArc";
  
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
        <AzureArc width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  