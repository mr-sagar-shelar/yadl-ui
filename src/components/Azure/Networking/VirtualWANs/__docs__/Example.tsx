import React, { FC } from "react";
  import VirtualWANs from "../VirtualWANs";
  
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
        <VirtualWANs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  