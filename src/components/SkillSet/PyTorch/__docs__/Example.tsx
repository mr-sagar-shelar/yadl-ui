import React, { FC } from "react";
  import PyTorch from "../PyTorch";
  
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
        <PyTorch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  