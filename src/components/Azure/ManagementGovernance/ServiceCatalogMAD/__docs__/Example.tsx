import React, { FC } from "react";
  import ServiceCatalogMAD from "../ServiceCatalogMAD";
  
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
        <ServiceCatalogMAD width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  