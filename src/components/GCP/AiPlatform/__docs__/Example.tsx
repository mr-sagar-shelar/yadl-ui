import React, { FC } from "react";
  import AiPlatform from "../AiPlatform";
  
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
        <AiPlatform width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  