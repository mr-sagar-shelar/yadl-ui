import React, { FC } from "react";
  import AzureDatabasePostgreSQLServer from "../AzureDatabasePostgreSQLServer";
  
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
        <AzureDatabasePostgreSQLServer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  