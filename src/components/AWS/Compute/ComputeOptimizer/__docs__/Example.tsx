import React, { FC } from "react";
  import ComputeOptimizer from "../ComputeOptimizer";
  
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
        <ComputeOptimizer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  