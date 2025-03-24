import React, { FC } from "react";
  import AzureDatabaseMigrationServices from "../AzureDatabaseMigrationServices";
  
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
        <AzureDatabaseMigrationServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  