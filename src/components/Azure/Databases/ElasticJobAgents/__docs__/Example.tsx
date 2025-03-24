import React, { FC } from "react";
  import ElasticJobAgents from "../ElasticJobAgents";
  
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
        <ElasticJobAgents width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  