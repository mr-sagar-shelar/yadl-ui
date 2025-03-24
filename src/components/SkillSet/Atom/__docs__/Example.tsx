import React, { FC } from "react";
  import Atom from "../Atom";
  
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
        <Atom width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  