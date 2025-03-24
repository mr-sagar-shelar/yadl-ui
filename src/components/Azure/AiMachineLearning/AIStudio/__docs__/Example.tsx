import React, { FC } from "react";
  import AIStudio from "../AIStudio";
  
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
        <AIStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  