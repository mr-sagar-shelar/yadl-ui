import React, { FC } from "react";
  import TypeScript from "../TypeScript";
  
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
        <TypeScript width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  