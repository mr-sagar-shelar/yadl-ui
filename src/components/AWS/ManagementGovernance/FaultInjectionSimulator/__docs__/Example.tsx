import React, { FC } from "react";
  import FaultInjectionSimulator from "../FaultInjectionSimulator";
  
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
        <FaultInjectionSimulator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  