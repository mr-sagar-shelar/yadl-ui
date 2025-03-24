import React, { FC } from "react";
  import DataCatalog from "../DataCatalog";
  
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
        <DataCatalog width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  