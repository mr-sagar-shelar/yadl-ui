import React, { FC } from "react";
  import ApplicationInsights from "../ApplicationInsights";
  
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
        <ApplicationInsights width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  