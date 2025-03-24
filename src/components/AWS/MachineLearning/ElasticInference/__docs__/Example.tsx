import React, { FC } from "react";
  import ElasticInference from "../ElasticInference";
  
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
        <ElasticInference width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  