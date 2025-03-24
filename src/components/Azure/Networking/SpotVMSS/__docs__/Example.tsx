import React, { FC } from "react";
  import SpotVMSS from "../SpotVMSS";
  
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
        <SpotVMSS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  