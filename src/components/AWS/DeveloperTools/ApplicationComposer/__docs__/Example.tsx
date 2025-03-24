import React, { FC } from "react";
  import ApplicationComposer from "../ApplicationComposer";
  
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
        <ApplicationComposer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  