import React, { FC } from "react";
  import Application from "../Application";
  
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
        <Application width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  