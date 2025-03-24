import React, { FC } from "react";
  import GameMakerStudio from "../GameMakerStudio";
  
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
        <GameMakerStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  