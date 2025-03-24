import React, { FC } from "react";
  import SageMaker from "../SageMaker";
  
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
        <SageMaker width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  