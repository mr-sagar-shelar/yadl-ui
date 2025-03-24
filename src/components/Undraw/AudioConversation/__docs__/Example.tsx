import React, { FC } from "react";
  import AudioConversation from "../AudioConversation";
  
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
        <AudioConversation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  