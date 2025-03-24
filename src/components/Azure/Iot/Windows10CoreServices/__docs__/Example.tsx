import React, { FC } from "react";
  import Windows10CoreServices from "../Windows10CoreServices";
  
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
        <Windows10CoreServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  