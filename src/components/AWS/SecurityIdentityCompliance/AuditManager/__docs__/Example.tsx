import React, { FC } from "react";
  import AuditManager from "../AuditManager";
  
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
        <AuditManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  