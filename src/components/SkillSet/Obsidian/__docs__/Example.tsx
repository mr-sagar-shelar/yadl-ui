import React, { FC } from "react";
  import Obsidian from "../Obsidian";
  
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
        <Obsidian width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  