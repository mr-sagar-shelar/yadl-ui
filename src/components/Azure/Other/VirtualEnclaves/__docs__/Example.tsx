import React, { FC } from "react";
  import VirtualEnclaves from "../VirtualEnclaves";
  
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
        <VirtualEnclaves width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  