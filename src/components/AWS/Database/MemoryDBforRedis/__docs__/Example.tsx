import React, { FC } from "react";
  import MemoryDBforRedis from "../MemoryDBforRedis";
  
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
        <MemoryDBforRedis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  