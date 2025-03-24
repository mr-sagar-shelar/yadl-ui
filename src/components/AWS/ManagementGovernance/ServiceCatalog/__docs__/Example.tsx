import React, { FC } from "react";
  import ServiceCatalog from "../ServiceCatalog";
  
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
        <ServiceCatalog width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  