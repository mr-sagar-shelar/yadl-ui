import React, { FC } from "react";
  import DeepLearningContainers from "../DeepLearningContainers";
  
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
        <DeepLearningContainers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  