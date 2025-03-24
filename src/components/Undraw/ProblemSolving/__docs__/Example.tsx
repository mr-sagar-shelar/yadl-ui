import React, { FC } from "react";
  import ProblemSolving from "../ProblemSolving";
  
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
        <ProblemSolving width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  