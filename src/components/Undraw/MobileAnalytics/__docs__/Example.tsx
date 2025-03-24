import React, { FC } from "react";
  import MobileAnalytics from "../MobileAnalytics";
  
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
        <MobileAnalytics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  