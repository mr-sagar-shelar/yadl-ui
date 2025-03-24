import React, { FC } from "react";
  import CloudLoadBalancing from "../CloudLoadBalancing";
  
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
        <CloudLoadBalancing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  