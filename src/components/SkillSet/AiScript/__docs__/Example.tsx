import React, { FC } from "react";
  import AiScript from "../AiScript";
  
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
        <AiScript width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  