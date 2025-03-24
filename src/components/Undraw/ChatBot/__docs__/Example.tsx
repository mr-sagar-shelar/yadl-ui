import React, { FC } from "react";
  import ChatBot from "../ChatBot";
  
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
        <ChatBot width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  