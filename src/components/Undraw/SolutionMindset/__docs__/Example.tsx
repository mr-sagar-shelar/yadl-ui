import React, { FC } from "react";
  import SolutionMindset from "../SolutionMindset";
  
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
        <SolutionMindset width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  