import React, { FC } from "react";
  import AppConfig from "../AppConfig";
  
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
        <AppConfig width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  