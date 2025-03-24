import React, { FC } from "react";
  import ComputeEngine from "../ComputeEngine";
  
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
        <ComputeEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  