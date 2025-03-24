import React, { FC } from "react";
  import Haskell from "../Haskell";
  
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
        <Haskell width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  