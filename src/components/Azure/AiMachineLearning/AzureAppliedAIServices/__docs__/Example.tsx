import React, { FC } from "react";
  import AzureAppliedAIServices from "../AzureAppliedAIServices";
  
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
        <AzureAppliedAIServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  