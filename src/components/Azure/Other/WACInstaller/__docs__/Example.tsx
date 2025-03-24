import React, { FC } from "react";
  import WACInstaller from "../WACInstaller";
  
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
        <WACInstaller width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  