import React, { FC } from "react";
  import VRChat from "../VRChat";
  
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
        <VRChat width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  