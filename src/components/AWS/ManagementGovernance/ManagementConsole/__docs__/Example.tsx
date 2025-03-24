import React, { FC } from "react";
  import ManagementConsole from "../ManagementConsole";
  
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
        <ManagementConsole width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  