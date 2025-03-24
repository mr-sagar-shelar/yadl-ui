import React, { FC } from "react";
  import CodeTyping from "../CodeTyping";
  
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
        <CodeTyping width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  