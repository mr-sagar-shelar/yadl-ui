import React, { FC } from "react";
  import LaunchDay from "../LaunchDay";
  
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
        <LaunchDay width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  