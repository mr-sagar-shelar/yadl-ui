import React, { FC } from "react";
  import NodeJS from "../NodeJS";
  
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
        <NodeJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  