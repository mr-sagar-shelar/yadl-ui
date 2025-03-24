import React, { FC } from "react";
  import CloudDomains from "../CloudDomains";
  
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
        <CloudDomains width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  