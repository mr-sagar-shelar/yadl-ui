import React, { FC } from "react";
  import ElasticSAN from "../ElasticSAN";
  
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
        <ElasticSAN width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  