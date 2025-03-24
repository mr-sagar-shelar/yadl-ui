import React, { FC } from "react";
  import AzureDataCatalog from "../AzureDataCatalog";
  
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
        <AzureDataCatalog width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  