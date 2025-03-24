import React, { FC } from "react";
  import VirtualInstanceforSAP from "../VirtualInstanceforSAP";
  
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
        <VirtualInstanceforSAP width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  