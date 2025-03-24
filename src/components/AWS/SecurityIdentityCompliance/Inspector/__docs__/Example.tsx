import React, { FC } from "react";
  import Inspector from "../Inspector";
  
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
        <Inspector width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  