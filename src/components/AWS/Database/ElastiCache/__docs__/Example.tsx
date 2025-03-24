import React, { FC } from "react";
  import ElastiCache from "../ElastiCache";
  
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
        <ElastiCache width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  