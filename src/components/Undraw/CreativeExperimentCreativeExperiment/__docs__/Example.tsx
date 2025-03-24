import React, { FC } from "react";
  import CreativeExperimentCreativeExperiment from "../CreativeExperimentCreativeExperiment";
  
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
        <CreativeExperimentCreativeExperiment width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  