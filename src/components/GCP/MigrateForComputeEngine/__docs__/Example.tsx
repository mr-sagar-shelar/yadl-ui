import React, { FC } from "react";
  import MigrateForComputeEngine from "../MigrateForComputeEngine";
  
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
        <MigrateForComputeEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  