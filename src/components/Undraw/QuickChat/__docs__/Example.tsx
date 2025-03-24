import React, { FC } from "react";
  import QuickChat from "../QuickChat";
  
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
        <QuickChat width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  