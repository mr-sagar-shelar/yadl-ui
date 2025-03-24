import React, { FC } from "react";
  import Corretto from "../Corretto";
  
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
        <Corretto width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  