import React, { FC } from "react";
  import WebSecurityScanner from "../WebSecurityScanner";
  
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
        <WebSecurityScanner width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  