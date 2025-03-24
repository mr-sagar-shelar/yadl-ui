import React, { FC } from "react";
  import MigrationHub from "../MigrationHub";
  
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
        <MigrationHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  