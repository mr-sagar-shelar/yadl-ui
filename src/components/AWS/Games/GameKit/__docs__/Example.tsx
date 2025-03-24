import React, { FC } from "react";
  import GameKit from "../GameKit";
  
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
        <GameKit width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  