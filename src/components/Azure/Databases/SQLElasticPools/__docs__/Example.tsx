import React, { FC } from "react";
  import SQLElasticPools from "../SQLElasticPools";
  
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
        <SQLElasticPools width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  