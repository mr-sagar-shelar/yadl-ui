import React, { FC } from "react";
  import ElasticFabricAdapter from "../ElasticFabricAdapter";
  
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
        <ElasticFabricAdapter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  