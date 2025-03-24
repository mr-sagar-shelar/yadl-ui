import React, { FC } from "react";
  import ContainerOptimizedOs from "../ContainerOptimizedOs";
  
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
        <ContainerOptimizedOs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  