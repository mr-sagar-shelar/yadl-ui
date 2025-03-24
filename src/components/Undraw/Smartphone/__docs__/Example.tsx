import React, { FC } from "react";
  import Smartphone from "../Smartphone";
  
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
        <Smartphone width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  