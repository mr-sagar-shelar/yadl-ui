import React, { FC } from "react";
  import Redis from "../Redis";
  
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
        <Redis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  