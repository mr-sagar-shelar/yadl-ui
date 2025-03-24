import React, { FC } from "react";
  import AzureLoadTesting from "../AzureLoadTesting";
  
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
        <AzureLoadTesting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  