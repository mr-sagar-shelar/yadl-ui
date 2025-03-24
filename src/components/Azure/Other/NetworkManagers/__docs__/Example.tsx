import React, { FC } from "react";
  import NetworkManagers from "../NetworkManagers";
  
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
        <NetworkManagers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  