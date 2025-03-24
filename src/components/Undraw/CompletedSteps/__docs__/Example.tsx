import React, { FC } from "react";
  import CompletedSteps from "../CompletedSteps";
  
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
        <CompletedSteps width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  