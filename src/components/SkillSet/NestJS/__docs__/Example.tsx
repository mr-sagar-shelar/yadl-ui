import React, { FC } from "react";
  import NestJS from "../NestJS";
  
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
        <NestJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  