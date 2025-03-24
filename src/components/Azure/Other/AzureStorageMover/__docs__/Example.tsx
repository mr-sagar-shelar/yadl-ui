import React, { FC } from "react";
  import AzureStorageMover from "../AzureStorageMover";
  
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
        <AzureStorageMover width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  