import React, { FC } from "react";
  import Pkl from "../Pkl";
  
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
        <Pkl width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  