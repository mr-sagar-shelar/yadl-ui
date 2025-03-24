import React, { FC } from "react";
  import GameSparks from "../GameSparks";
  
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
        <GameSparks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  