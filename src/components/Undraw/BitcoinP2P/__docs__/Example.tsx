import React, { FC } from "react";
  import BitcoinP2P from "../BitcoinP2P";
  
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
        <BitcoinP2P width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  