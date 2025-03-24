import React, { FC } from "react";
  import StartupLife from "../StartupLife";
  
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
        <StartupLife width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  