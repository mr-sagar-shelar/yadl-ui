import React, { FC } from "react";
  import LaTeX from "../LaTeX";
  
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
        <LaTeX width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  