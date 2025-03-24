import React, { FC } from "react";
  import ChangeAnalysis from "../ChangeAnalysis";
  
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
        <ChangeAnalysis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  