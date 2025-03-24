import React, { FC } from "react";
  import CloudSecurityScanner from "../CloudSecurityScanner";
  
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
        <CloudSecurityScanner width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  