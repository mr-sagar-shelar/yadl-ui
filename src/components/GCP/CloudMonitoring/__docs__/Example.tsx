import React, { FC } from "react";
  import CloudMonitoring from "../CloudMonitoring";
  
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
        <CloudMonitoring width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  