import React, { FC } from "react";
  import ThinkboxSequoia from "../ThinkboxSequoia";
  
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
        <ThinkboxSequoia width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  