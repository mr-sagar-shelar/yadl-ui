import React, { FC } from "react";
  import TensorFlowonAWS from "../TensorFlowonAWS";
  
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
        <TensorFlowonAWS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  