import React, { FC } from "react";
  import Npm from "../Npm";
  
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
        <Npm width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  