import React, { FC } from "react";
  import AzureOperatorInsights from "../AzureOperatorInsights";
  
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
        <AzureOperatorInsights width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  