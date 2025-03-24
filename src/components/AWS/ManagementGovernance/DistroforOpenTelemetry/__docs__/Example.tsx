import React, { FC } from "react";
  import DistroforOpenTelemetry from "../DistroforOpenTelemetry";
  
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
        <DistroforOpenTelemetry width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  