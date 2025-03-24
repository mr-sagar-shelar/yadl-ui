import React, { FC } from "react";
  import CMake from "../CMake";
  
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
        <CMake width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  