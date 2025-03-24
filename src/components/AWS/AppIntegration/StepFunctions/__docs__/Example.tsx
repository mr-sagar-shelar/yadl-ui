import React, { FC } from "react";
  import StepFunctions from "../StepFunctions";
  
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
        <StepFunctions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  