import React, { FC } from "react";
  import VIM from "../VIM";
  
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
        <VIM width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  