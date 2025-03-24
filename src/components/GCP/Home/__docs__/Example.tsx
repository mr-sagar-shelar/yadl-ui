import React, { FC } from "react";
  import Home from "../Home";
  
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
        <Home width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  