import React, { FC } from "react";
  import Profiler from "../Profiler";
  
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
        <Profiler width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  