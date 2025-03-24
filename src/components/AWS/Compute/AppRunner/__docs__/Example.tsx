import React, { FC } from "react";
  import AppRunner from "../AppRunner";
  
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
        <AppRunner width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  