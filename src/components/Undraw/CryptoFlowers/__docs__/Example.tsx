import React, { FC } from "react";
  import CryptoFlowers from "../CryptoFlowers";
  
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
        <CryptoFlowers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  