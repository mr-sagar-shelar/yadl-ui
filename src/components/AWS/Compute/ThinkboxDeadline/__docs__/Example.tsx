import React, { FC } from "react";
  import ThinkboxDeadline from "../ThinkboxDeadline";
  
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
        <ThinkboxDeadline width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  