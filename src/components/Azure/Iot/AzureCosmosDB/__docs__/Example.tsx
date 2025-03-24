import React, { FC } from "react";
  import AzureCosmosDB from "../AzureCosmosDB";
  
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
        <AzureCosmosDB width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  