import React, { FC } from "react";
  import CloudLogging from "../CloudLogging";
  
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
        <CloudLogging width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  