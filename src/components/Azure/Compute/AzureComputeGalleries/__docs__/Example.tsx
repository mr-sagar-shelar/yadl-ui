import React, { FC } from "react";
  import AzureComputeGalleries from "../AzureComputeGalleries";
  
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
        <AzureComputeGalleries width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  