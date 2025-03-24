import React, { FC } from "react";
  import CharacterDrawing from "../CharacterDrawing";
  
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
        <CharacterDrawing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  