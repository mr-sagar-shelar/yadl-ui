import React, { FC } from "react";
  import MetricsAdvisor from "../MetricsAdvisor";
  
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
        <MetricsAdvisor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  