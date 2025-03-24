import React, { FC } from "react";
  import AICodeGeneration from "../AICodeGeneration";
  
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
        <AICodeGeneration width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  