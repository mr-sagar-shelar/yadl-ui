import React, { FC } from "react";
  import StorageAzureFiles from "../StorageAzureFiles";
  
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
        <StorageAzureFiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  