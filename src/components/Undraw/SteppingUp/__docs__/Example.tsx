import React, { FC } from "react";
  import SteppingUp from "../SteppingUp";
  
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
        <SteppingUp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  