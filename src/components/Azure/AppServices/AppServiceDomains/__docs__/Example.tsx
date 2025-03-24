import React, { FC } from "react";
  import AppServiceDomains from "../AppServiceDomains";
  
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
        <AppServiceDomains width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  