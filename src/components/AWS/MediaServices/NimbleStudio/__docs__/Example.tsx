import React, { FC } from "react";
  import NimbleStudio from "../NimbleStudio";
  
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
        <NimbleStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  