import React, { FC } from "react";
  import KinesisDataAnalytics from "../KinesisDataAnalytics";
  
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
        <KinesisDataAnalytics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  