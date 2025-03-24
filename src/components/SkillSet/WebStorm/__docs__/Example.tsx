import React, { FC } from "react";
  import WebStorm from "../WebStorm";
  
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
        <WebStorm width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  