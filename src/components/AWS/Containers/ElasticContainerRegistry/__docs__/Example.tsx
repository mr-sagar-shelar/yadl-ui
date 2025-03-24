import React, { FC } from "react";
  import ElasticContainerRegistry from "../ElasticContainerRegistry";
  
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
        <ElasticContainerRegistry width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  