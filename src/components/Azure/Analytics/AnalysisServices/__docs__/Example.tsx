import React, { FC } from "react";
  import AnalysisServices from "../AnalysisServices";
  
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
        <AnalysisServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  