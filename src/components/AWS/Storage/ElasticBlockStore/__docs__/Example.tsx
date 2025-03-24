import React, { FC } from "react";
  import ElasticBlockStore from "../ElasticBlockStore";
  
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
        <ElasticBlockStore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  