import React, { FC } from "react";
  import ResilienceHub from "../ResilienceHub";
  
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
        <ResilienceHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  