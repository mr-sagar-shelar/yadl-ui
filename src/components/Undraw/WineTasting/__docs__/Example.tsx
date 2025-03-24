import React, { FC } from "react";
  import WineTasting from "../WineTasting";
  
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
        <WineTasting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  