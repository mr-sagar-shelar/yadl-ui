import React, { FC } from "react";
  import ThoughtProcess from "../ThoughtProcess";
  
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
        <ThoughtProcess width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  