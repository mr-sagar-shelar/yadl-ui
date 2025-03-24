import React, { FC } from "react";
  import AzureSentinel from "../AzureSentinel";
  
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
        <AzureSentinel width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  