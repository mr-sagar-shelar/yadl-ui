import React, { FC } from "react";
  import DedicatedHSM from "../DedicatedHSM";
  
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
        <DedicatedHSM width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  