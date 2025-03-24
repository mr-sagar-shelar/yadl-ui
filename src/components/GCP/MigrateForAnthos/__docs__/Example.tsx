import React, { FC } from "react";
  import MigrateForAnthos from "../MigrateForAnthos";
  
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
        <MigrateForAnthos width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  