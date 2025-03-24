import React, { FC } from "react";
  import AppWireframe from "../AppWireframe";
  
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
        <AppWireframe width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  