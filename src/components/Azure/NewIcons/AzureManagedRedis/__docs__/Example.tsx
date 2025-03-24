import React, { FC } from "react";
  import AzureManagedRedis from "../AzureManagedRedis";
  
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
        <AzureManagedRedis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  