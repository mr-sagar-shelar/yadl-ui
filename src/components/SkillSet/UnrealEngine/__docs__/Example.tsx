import React, { FC } from "react";
  import UnrealEngine from "../UnrealEngine";
  
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
        <UnrealEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  