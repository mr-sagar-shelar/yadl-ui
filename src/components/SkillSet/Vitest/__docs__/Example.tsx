import React, { FC } from "react";
  import Vitest from "../Vitest";
  
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
        <Vitest width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  