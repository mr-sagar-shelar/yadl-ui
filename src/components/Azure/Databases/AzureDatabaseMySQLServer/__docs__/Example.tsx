import React, { FC } from "react";
  import AzureDatabaseMySQLServer from "../AzureDatabaseMySQLServer";
  
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
        <AzureDatabaseMySQLServer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  