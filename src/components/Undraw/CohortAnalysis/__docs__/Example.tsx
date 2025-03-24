import React, { FC } from "react";
  import CohortAnalysis from "../CohortAnalysis";
  
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
        <CohortAnalysis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  