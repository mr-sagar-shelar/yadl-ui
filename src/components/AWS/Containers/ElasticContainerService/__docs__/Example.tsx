import React, { FC } from "react";
  import ElasticContainerService from "../ElasticContainerService";
  
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
        <ElasticContainerService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  