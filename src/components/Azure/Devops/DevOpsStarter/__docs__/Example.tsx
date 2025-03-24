import React, { FC } from "react";
  import DevOpsStarter from "../DevOpsStarter";
  
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
        <DevOpsStarter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  