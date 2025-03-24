import React, { FC } from "react";
  import AppServices from "../AppServices";
  
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
        <AppServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  