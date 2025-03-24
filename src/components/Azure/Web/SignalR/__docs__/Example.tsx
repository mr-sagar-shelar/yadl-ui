import React, { FC } from "react";
  import SignalR from "../SignalR";
  
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
        <SignalR width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  