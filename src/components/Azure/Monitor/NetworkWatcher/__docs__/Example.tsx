import React, { FC } from "react";
  import NetworkWatcher from "../NetworkWatcher";
  
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
        <NetworkWatcher width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  