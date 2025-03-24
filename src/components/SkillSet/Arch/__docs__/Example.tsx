import React, { FC } from "react";
  import Arch from "../Arch";
  
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
        <Arch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  