import React, { FC } from "react";
  import AzureBackupCenter from "../AzureBackupCenter";
  
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
        <AzureBackupCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  