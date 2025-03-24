import React, { FC } from "react";
  import Chatbot from "../Chatbot";
  
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
        <Chatbot width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  