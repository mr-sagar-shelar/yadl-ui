import React, { FC } from "react";
  import CognitiveServicesDecisions from "../CognitiveServicesDecisions";
  
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
        <CognitiveServicesDecisions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  