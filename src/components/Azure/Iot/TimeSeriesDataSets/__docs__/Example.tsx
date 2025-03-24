import React, { FC } from "react";
  import TimeSeriesDataSets from "../TimeSeriesDataSets";
  
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
        <TimeSeriesDataSets width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  