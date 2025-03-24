import React, { FC } from "react";
  import MigrationEvaluator from "../MigrationEvaluator";
  
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
        <MigrationEvaluator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  