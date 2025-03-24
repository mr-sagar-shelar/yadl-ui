import React, { FC } from "react";
  import ApplicationAutoScaling from "../ApplicationAutoScaling";
  
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
        <ApplicationAutoScaling width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  