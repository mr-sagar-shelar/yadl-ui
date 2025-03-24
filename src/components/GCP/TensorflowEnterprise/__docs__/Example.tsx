import React, { FC } from "react";
  import TensorflowEnterprise from "../TensorflowEnterprise";
  
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
        <TensorflowEnterprise width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  