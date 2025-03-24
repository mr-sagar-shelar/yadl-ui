import React, { FC } from "react";
  import NeoVim from "../NeoVim";
  
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
        <NeoVim width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  