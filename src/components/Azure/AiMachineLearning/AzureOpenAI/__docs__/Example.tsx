import React, { FC } from "react";
  import AzureOpenAI from "../AzureOpenAI";
  
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
        <AzureOpenAI width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  