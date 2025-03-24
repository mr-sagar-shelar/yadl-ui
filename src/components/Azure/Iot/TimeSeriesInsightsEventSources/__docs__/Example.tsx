import React, { FC } from "react";
  import TimeSeriesInsightsEventSources from "../TimeSeriesInsightsEventSources";
  
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
        <TimeSeriesInsightsEventSources width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  