import React, { FC } from "react";
  import CloudAuditLogs from "../CloudAuditLogs";
  
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
        <CloudAuditLogs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  