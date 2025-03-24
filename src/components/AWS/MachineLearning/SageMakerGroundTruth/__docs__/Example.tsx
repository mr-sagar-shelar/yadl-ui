import React, { FC } from "react";
  import SageMakerGroundTruth from "../SageMakerGroundTruth";
  
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
        <SageMakerGroundTruth width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  