import React, { FC } from "react";
  import CommandLineInterface from "../CommandLineInterface";
  
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
        <CommandLineInterface width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  