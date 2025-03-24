import React, { FC } from "react";
  import ThinkboxKrakatoa from "../ThinkboxKrakatoa";
  
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
        <ThinkboxKrakatoa width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  