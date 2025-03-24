import React, { FC } from "react";
  import WebAssembly from "../WebAssembly";
  
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
        <WebAssembly width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  