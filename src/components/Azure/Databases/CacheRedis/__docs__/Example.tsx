import React, { FC } from "react";
  import CacheRedis from "../CacheRedis";
  
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
        <CacheRedis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  