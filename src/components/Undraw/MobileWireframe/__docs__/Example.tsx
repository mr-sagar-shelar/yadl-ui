import React, { FC } from "react";
  import MobileWireframe from "../MobileWireframe";
  
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
        <MobileWireframe width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  