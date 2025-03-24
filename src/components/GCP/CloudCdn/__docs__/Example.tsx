import React, { FC } from "react";
  import CloudCdn from "../CloudCdn";
  
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
        <CloudCdn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  