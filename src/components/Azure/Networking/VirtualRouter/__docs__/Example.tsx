import React, { FC } from "react";
  import VirtualRouter from "../VirtualRouter";
  
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
        <VirtualRouter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  