import React, { FC } from "react";
  import AIatEdge from "../AIatEdge";
  
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
        <AIatEdge width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  