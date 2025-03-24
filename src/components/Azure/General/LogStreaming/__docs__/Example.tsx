import React, { FC } from "react";
  import LogStreaming from "../LogStreaming";
  
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
        <LogStreaming width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  