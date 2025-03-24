import React, { FC } from "react";
  import BeginChat from "../BeginChat";
  
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
        <BeginChat width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  