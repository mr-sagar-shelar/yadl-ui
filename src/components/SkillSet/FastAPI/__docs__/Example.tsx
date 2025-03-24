import React, { FC } from "react";
  import FastAPI from "../FastAPI";
  
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
        <FastAPI width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  