import React, { FC } from "react";
  import AzureExperimentationStudio from "../AzureExperimentationStudio";
  
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
        <AzureExperimentationStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  