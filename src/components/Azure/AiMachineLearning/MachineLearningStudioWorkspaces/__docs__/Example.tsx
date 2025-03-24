import React, { FC } from "react";
  import MachineLearningStudioWorkspaces from "../MachineLearningStudioWorkspaces";
  
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
        <MachineLearningStudioWorkspaces width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  