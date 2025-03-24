import React, { FC } from "react";
  import LaunchPortal from "../LaunchPortal";
  
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
        <LaunchPortal width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  