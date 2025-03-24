import React, { FC } from "react";
  import AzureSynapseAnalytics from "../AzureSynapseAnalytics";
  
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
        <AzureSynapseAnalytics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  