import React, { FC } from "react";
  import CircuitBoard from "../CircuitBoard";
  
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
        <CircuitBoard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  