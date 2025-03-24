import React, { FC } from "react";
  import MachineLearning from "../MachineLearning";
  
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
        <MachineLearning width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  