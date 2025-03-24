import React, { FC } from "react";
  import AzureOperatorNexus from "../AzureOperatorNexus";
  
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
        <AzureOperatorNexus width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  