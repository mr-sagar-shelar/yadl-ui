import React, { FC } from "react";
  import PerformanceDashboard from "../PerformanceDashboard";
  
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
        <PerformanceDashboard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  