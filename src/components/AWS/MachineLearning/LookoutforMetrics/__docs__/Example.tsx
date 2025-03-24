import React, { FC } from "react";
  import LookoutforMetrics from "../LookoutforMetrics";
  
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
        <LookoutforMetrics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  