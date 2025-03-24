import React, { FC } from "react";
  import Nix from "../Nix";
  
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
        <Nix width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  