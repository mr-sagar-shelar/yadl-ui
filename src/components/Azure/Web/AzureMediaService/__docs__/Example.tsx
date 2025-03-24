import React, { FC } from "react";
  import AzureMediaService from "../AzureMediaService";
  
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
        <AzureMediaService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  