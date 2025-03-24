import React, { FC } from "react";
  import AzureSQLServerStretchDatabases from "../AzureSQLServerStretchDatabases";
  
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
        <AzureSQLServerStretchDatabases width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  