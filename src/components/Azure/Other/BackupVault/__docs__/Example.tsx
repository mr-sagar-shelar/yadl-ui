import React, { FC } from "react";
  import BackupVault from "../BackupVault";
  
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
        <BackupVault width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  