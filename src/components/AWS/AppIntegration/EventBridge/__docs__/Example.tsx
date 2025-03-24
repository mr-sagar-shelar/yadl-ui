import React, { FC } from "react";
  import EventBridge from "../EventBridge";
  
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
        <EventBridge width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  