import React, { FC } from "react";
  import Elysia from "../Elysia";
  
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
        <Elysia width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  