import React, { FC } from "react";
  import DENO from "../DENO";
  
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
        <DENO width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  