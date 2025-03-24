import React, { FC } from "react";
  import CodeOptimization from "../CodeOptimization";
  
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
        <CodeOptimization width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  