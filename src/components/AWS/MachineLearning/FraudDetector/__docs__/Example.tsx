import React, { FC } from "react";
  import FraudDetector from "../FraudDetector";
  
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
        <FraudDetector width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  