import React, { FC } from "react";
  import DeepLearningAMIs from "../DeepLearningAMIs";
  
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
        <DeepLearningAMIs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  