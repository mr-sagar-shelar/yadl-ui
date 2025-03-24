import React, { FC } from "react";
  import Windows from "../Windows";
  
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
        <Windows width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  