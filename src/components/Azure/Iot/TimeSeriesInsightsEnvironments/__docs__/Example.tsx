import React, { FC } from "react";
  import TimeSeriesInsightsEnvironments from "../TimeSeriesInsightsEnvironments";
  
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
        <TimeSeriesInsightsEnvironments width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  