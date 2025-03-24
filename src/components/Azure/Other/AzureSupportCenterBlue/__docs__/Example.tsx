import React, { FC } from "react";
  import AzureSupportCenterBlue from "../AzureSupportCenterBlue";
  
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
        <AzureSupportCenterBlue width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  