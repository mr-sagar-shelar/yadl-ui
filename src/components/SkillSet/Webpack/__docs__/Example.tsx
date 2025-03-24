import React, { FC } from "react";
  import Webpack from "../Webpack";
  
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
        <Webpack width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  