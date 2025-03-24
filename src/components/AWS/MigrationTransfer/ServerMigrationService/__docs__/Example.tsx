import React, { FC } from "react";
  import ServerMigrationService from "../ServerMigrationService";
  
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
        <ServerMigrationService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  