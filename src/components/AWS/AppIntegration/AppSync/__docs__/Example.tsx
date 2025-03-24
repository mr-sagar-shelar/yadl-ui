import React, { FC } from "react";
  import AppSync from "../AppSync";
  
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
        <AppSync width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  