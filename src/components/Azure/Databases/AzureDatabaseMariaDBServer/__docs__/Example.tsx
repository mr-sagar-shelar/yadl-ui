import React, { FC } from "react";
  import AzureDatabaseMariaDBServer from "../AzureDatabaseMariaDBServer";
  
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
        <AzureDatabaseMariaDBServer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  