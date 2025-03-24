import React, { FC } from "react";
  import AzureVideoIndexer from "../AzureVideoIndexer";
  
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
        <AzureVideoIndexer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  