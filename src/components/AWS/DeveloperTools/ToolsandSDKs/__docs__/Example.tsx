import React, { FC } from "react";
  import ToolsandSDKs from "../ToolsandSDKs";
  
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
        <ToolsandSDKs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  