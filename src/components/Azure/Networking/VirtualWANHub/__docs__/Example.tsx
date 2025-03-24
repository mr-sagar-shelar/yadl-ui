import React, { FC } from "react";
  import VirtualWANHub from "../VirtualWANHub";
  
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
        <VirtualWANHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  