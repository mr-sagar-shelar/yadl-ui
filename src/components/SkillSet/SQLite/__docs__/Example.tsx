import React, { FC } from "react";
  import SQLite from "../SQLite";
  
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
        <SQLite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  