import React, { FC } from "react";
  import SageMakerStudioLab from "../SageMakerStudioLab";
  
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
        <SageMakerStudioLab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  