import React, { FC } from "react";
  import OsConfigurationManagement from "../OsConfigurationManagement";
  
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
        <OsConfigurationManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  