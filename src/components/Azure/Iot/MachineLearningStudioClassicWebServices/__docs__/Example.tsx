import React, { FC } from "react";
  import MachineLearningStudioClassicWebServices from "../MachineLearningStudioClassicWebServices";
  
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
        <MachineLearningStudioClassicWebServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  