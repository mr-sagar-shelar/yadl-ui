import React, { FC } from "react";
  import AiHub from "../AiHub";
  
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
        <AiHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  