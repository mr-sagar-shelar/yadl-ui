import React, { FC } from "react";
  import CloudTpu from "../CloudTpu";
  
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
        <CloudTpu width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  