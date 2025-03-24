import React, { FC } from "react";
  import AzureDatabasePostgreSQLServerGroup from "../AzureDatabasePostgreSQLServerGroup";
  
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
        <AzureDatabasePostgreSQLServerGroup width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  