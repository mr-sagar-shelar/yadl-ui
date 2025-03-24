import React, { FC } from "react";
  import TorchServe from "../TorchServe";
  
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
        <TorchServe width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  