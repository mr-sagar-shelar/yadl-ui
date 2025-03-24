import React, { FC } from "react";
  import CostAnalysis from "../CostAnalysis";
  
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
        <CostAnalysis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  