import React, { FC } from "react";
  import PerformanceOverview from "../PerformanceOverview";
  
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
        <PerformanceOverview width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  