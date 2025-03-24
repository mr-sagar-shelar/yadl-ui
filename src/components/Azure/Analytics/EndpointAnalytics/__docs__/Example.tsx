import React, { FC } from "react";
  import EndpointAnalytics from "../EndpointAnalytics";
  
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
        <EndpointAnalytics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  