import React, { FC } from "react";
  import Signer from "../Signer";
  
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
        <Signer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  