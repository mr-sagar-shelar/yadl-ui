import React, { FC } from "react";
  import BusinessAnalytics from "../BusinessAnalytics";
  
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
        <BusinessAnalytics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  