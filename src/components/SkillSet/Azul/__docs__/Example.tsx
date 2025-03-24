import React, { FC } from "react";
  import Azul from "../Azul";
  
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
        <Azul width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  