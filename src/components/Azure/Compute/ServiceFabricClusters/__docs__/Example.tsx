import React, { FC } from "react";
  import ServiceFabricClusters from "../ServiceFabricClusters";
  
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
        <ServiceFabricClusters width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  