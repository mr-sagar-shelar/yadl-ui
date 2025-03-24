import React, { FC } from "react";
  import NetworkSecurity from "../NetworkSecurity";
  
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
        <NetworkSecurity width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  