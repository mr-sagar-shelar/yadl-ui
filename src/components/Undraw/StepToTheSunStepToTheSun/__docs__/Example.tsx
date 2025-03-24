import React, { FC } from "react";
  import StepToTheSunStepToTheSun from "../StepToTheSunStepToTheSun";
  
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
        <StepToTheSunStepToTheSun width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  