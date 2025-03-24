import React, { FC } from "react";
  import ApplicationMigrationService from "../ApplicationMigrationService";
  
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
        <ApplicationMigrationService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  