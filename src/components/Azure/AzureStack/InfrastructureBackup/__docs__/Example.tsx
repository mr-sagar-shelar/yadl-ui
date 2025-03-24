import React, { FC } from "react";
  import InfrastructureBackup from "../InfrastructureBackup";
  
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
        <InfrastructureBackup width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  