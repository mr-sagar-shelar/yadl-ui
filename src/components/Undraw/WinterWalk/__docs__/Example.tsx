import React, { FC } from "react";
  import WinterWalk from "../WinterWalk";
  
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
        <WinterWalk width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  