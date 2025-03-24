import React, { FC } from "react";
  import MonitorHealthModels from "../MonitorHealthModels";
  
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
        <MonitorHealthModels width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  