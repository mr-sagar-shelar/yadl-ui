import React, { FC } from "react";
  import Dart from "../Dart";
  
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
        <Dart width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  