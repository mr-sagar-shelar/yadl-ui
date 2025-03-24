import React, { FC } from "react";
  import Solidity from "../Solidity";
  
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
        <Solidity width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  