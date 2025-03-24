import React, { FC } from "react";
  import ElasticLoadBalancing from "../ElasticLoadBalancing";
  
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
        <ElasticLoadBalancing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  