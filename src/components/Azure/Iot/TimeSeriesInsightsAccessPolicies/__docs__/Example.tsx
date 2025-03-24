import React, { FC } from "react";
  import TimeSeriesInsightsAccessPolicies from "../TimeSeriesInsightsAccessPolicies";
  
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
        <TimeSeriesInsightsAccessPolicies width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  