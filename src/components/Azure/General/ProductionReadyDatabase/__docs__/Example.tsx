import React, { FC } from "react";
  import ProductionReadyDatabase from "../ProductionReadyDatabase";
  
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
        <ProductionReadyDatabase width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  