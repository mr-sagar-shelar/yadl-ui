import React, { FC } from "react";
  import ApplicationCostProfiler from "../ApplicationCostProfiler";
  
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
        <ApplicationCostProfiler width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  