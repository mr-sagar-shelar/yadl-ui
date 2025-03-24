import React, { FC } from "react";
  import CodeThinking from "../CodeThinking";
  
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
        <CodeThinking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  