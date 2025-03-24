import React, { FC } from "react";
  import CloudScheduler from "../CloudScheduler";
  
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
        <CloudScheduler width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  