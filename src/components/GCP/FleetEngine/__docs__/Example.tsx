import React, { FC } from "react";
  import FleetEngine from "../FleetEngine";
  
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
        <FleetEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  