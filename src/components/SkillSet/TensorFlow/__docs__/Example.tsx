import React, { FC } from "react";
  import TensorFlow from "../TensorFlow";
  
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
        <TensorFlow width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  