import React, { FC } from "react";
  import CodeWhisperer from "../CodeWhisperer";
  
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
        <CodeWhisperer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  